document.addEventListener('DOMContentLoaded', () => {
    
    // --- Tab System Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target pane
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Digital Detox Timer Logic ---
    let timerInterval;
    let timeLeft = 25 * 60; // 25 minutes in seconds
    let isRunning = false;

    const display = document.getElementById('timer-display');
    const statusText = document.getElementById('timer-status');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        // Add leading zero if less than 10
        display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function startTimer() {
        if (isRunning) return;
        
        isRunning = true;
        statusText.textContent = "ركز.. أنت أقوى من المشتتات";
        // تغيير لون النص ليتوافق مع الثيم الفيروزي الجديد
        statusText.style.color = "#00897b"; 
        
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                statusText.textContent = "أحسنت! أكملت جلسة التحدي بنجاح 🎉";
                statusText.style.color = "#ff7043"; // اللون البرتقالي عند الإنجاز
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        statusText.textContent = "تم الإيقاف مؤقتاً";
        statusText.style.color = "#636e72";
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = 25 * 60; // Reset to 25 mins
        updateDisplay();
        statusText.textContent = "جاهز للتحدي؟";
        statusText.style.color = "#636e72";
    }

    // Event Listeners for Timer
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    // Initialize display
    updateDisplay();

}};
