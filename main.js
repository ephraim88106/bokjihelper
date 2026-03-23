console.log("Main JS loaded.");

document.addEventListener("DOMContentLoaded", () => {
    const statusEl = document.getElementById("status");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Initial status message
    if (statusEl) {
        statusEl.textContent = "테마 전환 기능이 활성화되었습니다!";
    }

    // Load saved theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "라이트 모드로 전환";
    }

    // Theme toggle event listener
    themeToggle.addEventListener("click", () => {
        const isDark = body.getAttribute("data-theme") === "dark";
        
        if (isDark) {
            body.removeAttribute("data-theme");
            themeToggle.textContent = "다크 모드로 전환";
            localStorage.setItem("theme", "light");
        } else {
            body.setAttribute("data-theme", "dark");
            themeToggle.textContent = "라이트 모드로 전환";
            localStorage.setItem("theme", "dark");
        }
    });
});
