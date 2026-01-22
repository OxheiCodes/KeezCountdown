// Set the target date to 28/01/2026
const targetDate = new Date('2026-01-28T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    
    const countdownElement = document.getElementById('countdown');
    
    if (timeRemaining < 0) {
        // Date has passed
        countdownElement.innerHTML = '<div style="font-size: 48px; font-weight: bold; color: #1db954;">Out now</div>';
        return;
    }
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Format the countdown display
    countdownElement.innerHTML = `
        <div class="countdown-item">
            <span>${String(days).padStart(2, '0')}</span>
            <p>Days</p>
        </div>
        <div class="countdown-item">
            <span>${String(hours).padStart(2, '0')}</span>
            <p>Hours</p>
        </div>
        <div class="countdown-item">
            <span>${String(minutes).padStart(2, '0')}</span>
            <p>Minutes</p>
        </div>
        <div class="countdown-item">
            <span>${String(seconds).padStart(2, '0')}</span>
            <p>Seconds</p>
        </div>
    `;
}

// Update countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
