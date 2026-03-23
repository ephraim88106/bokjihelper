document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const seatGrid = document.getElementById("seatGrid");
    const selectedSeatNum = document.getElementById("selectedSeatNum");
    const reserveBtn = document.getElementById("reserveBtn");

    // 1. Theme Management
    const updateThemeIcon = (isDark) => {
        const icon = themeToggle.querySelector("i");
        icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    };

    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        body.setAttribute("data-theme", "dark");
        updateThemeIcon(true);
    }

    themeToggle.addEventListener("click", () => {
        const isDark = body.getAttribute("data-theme") === "dark";
        if (isDark) {
            body.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            updateThemeIcon(false);
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            updateThemeIcon(true);
        }
    });

    // 2. Seat Map Generation
    const totalSeats = 24;
    const occupiedSeats = [3, 7, 8, 12, 15, 20]; // Mock occupied seats
    let currentSelectedSeat = null;

    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = i;
        
        if (occupiedSeats.includes(i)) {
            seat.classList.add("occupied");
        } else {
            seat.addEventListener("click", () => {
                // Deselect previous seat
                if (currentSelectedSeat) {
                    currentSelectedSeat.classList.remove("selected");
                }

                // Select new seat
                if (currentSelectedSeat === seat) {
                    currentSelectedSeat = null;
                    selectedSeatNum.textContent = "없음";
                    reserveBtn.disabled = true;
                } else {
                    seat.classList.add("selected");
                    currentSelectedSeat = seat;
                    selectedSeatNum.textContent = `${i}번`;
                    reserveBtn.disabled = false;
                }
            });
        }
        
        seatGrid.appendChild(seat);
    }

    // 3. Booking Action
    reserveBtn.addEventListener("click", () => {
        if (currentSelectedSeat) {
            const seatNum = currentSelectedSeat.textContent;
            alert(`${seatNum}번 좌석 예약이 완료되었습니다!`);
            
            // Mock reservation update
            currentSelectedSeat.classList.remove("selected");
            currentSelectedSeat.classList.add("occupied");
            currentSelectedSeat = null;
            selectedSeatNum.textContent = "없음";
            reserveBtn.disabled = true;
        }
    });
});
