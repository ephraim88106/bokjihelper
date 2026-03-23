console.log("Main JS loaded.");

document.addEventListener("DOMContentLoaded", () => {
    const statusEl = document.getElementById("status");
    if (statusEl) {
        statusEl.textContent = "프로젝트에 연결되었습니다! 개발을 시작할 준비가 되었습니다.";
    }
});
