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
        description: "웨이브3 이하 : 마이쮸, 웨이브4 : 과자 택1, 웨이브5 : 과자 택2",
        thumbnail: "", // 예: "https://example.com/game1-thumbnail.jpg"
        link: "https://leety291.github.io/neon-survival/" // 예: "https://github.com/your-team/game1"
    },
    {
        id: 2,
        title: "반응속도 테스트 - F1",
        description: "0.27초 이하 : 마이쮸, 0.21초 이하 : 과자 택1",
        thumbnail: "",
        link: "https://doyle0415.github.io/startupF1/startup/index.html"
    },
    {
        id: 3,
        title: "에임랩",
        description: "35개 이하 : 마이쮸, 36개 이상 : 과자 택1",
        thumbnail: "",
        link: "https://hajun0206.github.io/Unity_AimTestBuild/"
    },
    {
        id: 4,
        title: "ThrowDodge",
        description: "승자 : 과자 택1, 패자 : 마이쮸",
        thumbnail: "",
        link: "https://leety291.github.io/ThrowDodge/"
    },
    {
        id: 5,
        title: "간식 강화하기",
        description: "간식 강화하기",
        thumbnail: "",
        link: "https://hajun0206.github.io/ReinforceSnackBuild/"
    }
];
