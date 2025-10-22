document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');

    if (typeof games !== 'undefined' && Array.isArray(games)) {
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            gameCard.innerHTML = `
                <div class="thumbnail" style="background-image: url('${game.thumbnail || ''}');">
                    ${game.thumbnail ? '' : 'No Image'}
                </div>
                <div class="info">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <a href="${game.link}" target="_blank">게임 플레이</a>
                </div>
            `;
            gameGrid.appendChild(gameCard);
        });
    } else {
        gameGrid.innerHTML = '<p>게임을 불러올 수 없습니다. games.js 파일을 확인해주세요.</p>';
    }
});
