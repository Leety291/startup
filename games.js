/**
 * 이 배열에 게임 정보를 추가하여 웹사이트에 표시할 수 있습니다.
 * 각 게임 객체는 다음 속성을 가집니다:
 * - id: 고유한 숫자 ID (필수)
 * - title: 게임 제목 (필수)
 * - description: 게임에 대한 간략한 설명 (필수)
 * - thumbnail: 게임 썸네일 이미지 URL (선택 사항, 없으면 "No Image" 표시)
 * - link: 게임 플레이 링크 (필수)
 */
const games = [
    {
        id: 1,
        title: "neon-survival",
        description: "neon-survival은 플레이어가 파란 화살표 드론을 조종하여 타워를 방어하는 뱀서라이크 게임입니다. 웨이브  기반으로 몰려오는 다양한 적들을 QER 스킬과 룰렛 상점 업그레이드를 활용해 물리치고 최고 기록에 도전합니다.",
        thumbnail: "", // 예: "https://example.com/game1-thumbnail.jpg"
        link: "https://leety291.github.io/neon-survival/" // 예: "https://github.com/your-team/game1"
    },
    {
        id: 2,
        title: "반응속도 테스트 - F1",
        description: "두 번째 게임은 독특한 스토리와 그래픽을 자랑합니다. 지금 바로 플레이해보세요!",
        thumbnail: "",
        link: "https://doyle0415.github.io/startupF1/startup/index.html"
    },
    {
        id: 3,
        title: "에임랩",
        description: "세 번째 게임은 전략적인 요소가 강합니다. 당신의 두뇌를 시험해보세요!",
        thumbnail: "",
        link: "https://hajun0206.github.io/Unity_AimTestBuild/"
    },
    {
        id: 4,
        title: "똥피하기",
        description: "여기에 새로운 게임에 대한 설명을 입력해주세요.",
        thumbnail: "",
        link: "https://leety291.github.io/ThrowDodge/"
    }
];
