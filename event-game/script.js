document.addEventListener('DOMContentLoaded', () => {
    const participantForm = document.getElementById('participant-form');
    const studentIdInput = document.getElementById('studentId');
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const submitBtn = document.getElementById('submit-btn');
    const messageDisplay = document.getElementById('message');
    const showResultsBtn = document.getElementById('show-results-btn');
    const resetGameBtn = document.getElementById('reset-game-btn');
    const resultsSection = document.getElementById('results-section');
    const averageDisplay = document.getElementById('average-display');
    const resultsTableBody = document.querySelector('#results-table tbody');

    let participants = JSON.parse(localStorage.getItem('guessingGameParticipants')) || [];

    // Function to display messages to the user
    function showMessage(msg, isError = false) {
        messageDisplay.textContent = msg;
        messageDisplay.className = isError ? 'message error' : 'message';
    }

    // Function to save participants to localStorage
    function saveParticipants() {
        localStorage.setItem('guessingGameParticipants', JSON.stringify(participants));
    }

    // Handle form submission
    participantForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const studentId = studentIdInput.value.trim();
        const name = nameInput.value.trim();
        const number = parseInt(numberInput.value, 10);

        // Basic validation
        if (!studentId || !name || isNaN(number) || number < 1 || number > 100) {
            showMessage('모든 필드를 올바르게 입력해주세요 (숫자는 1~100). ', true);
            return;
        }

        // Check for duplicate submission by studentId or name
        const isDuplicate = participants.some(p => p.studentId === studentId || p.name === name);
        if (isDuplicate) {
            showMessage('이미 참여하셨습니다. (학번 또는 이름 중복)', true);
            return;
        }

        // Add participant
        participants.push({ studentId, name, number });
        saveParticipants();

        showMessage('제출되었습니다! 다음 참가자가 이어서 참여할 수 있습니다.');

        // Clear form for next participant
        studentIdInput.value = '';
        nameInput.value = '';
        numberInput.value = '';
        studentIdInput.focus();
    });

    // Handle show results button click
    showResultsBtn.addEventListener('click', () => {
        if (participants.length === 0) {
            showMessage('아직 참가자가 없습니다.', true);
            return;
        }

        // Calculate average
        const total = participants.reduce((sum, p) => sum + p.number, 0);
        const average = total / participants.length;
        averageDisplay.textContent = average.toFixed(2);

        // Calculate difference and sort participants
        participants.forEach(p => {
            p.difference = Math.abs(p.number - average);
        });

        participants.sort((a, b) => a.difference - b.difference);

        // Display results
        resultsTableBody.innerHTML = ''; // Clear previous results
        participants.forEach((p, index) => {
            const row = resultsTableBody.insertRow();
            row.insertCell().textContent = index + 1; // Rank
            row.insertCell().textContent = p.name;
            row.insertCell().textContent = p.studentId;
            row.insertCell().textContent = p.number;
            row.insertCell().textContent = p.difference.toFixed(2);
        });

        resultsSection.classList.remove('hidden');
        showMessage('결과가 발표되었습니다!');
        submitBtn.disabled = true; // Disable submission after results are shown
    });

    // Handle reset game button click
    resetGameBtn.addEventListener('click', () => {
        if (confirm('정말로 게임을 초기화하시겠습니까? 모든 참가자 데이터가 삭제됩니다.')) {
            participants = [];
            saveParticipants();
            resultsTableBody.innerHTML = '';
            resultsSection.classList.add('hidden');
            showMessage('게임이 초기화되었습니다. 새로운 게임을 시작할 수 있습니다.');
            submitBtn.disabled = false; // Enable submission after reset
            studentIdInput.value = '';
            nameInput.value = '';
            numberInput.value = '';
            studentIdInput.focus();
        }
    });

    // Initial state: if results were previously shown, keep submit button disabled
    if (resultsSection.classList.contains('hidden') === false) {
        submitBtn.disabled = true;
    }
});
