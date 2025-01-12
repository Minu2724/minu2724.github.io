// Set your meeting date here (YYYY, MM-1, DD, HH, MM)
const meetingDate = new Date(2025, 0, 17, 17, 30);

function calculateTimeLeft() {
    const difference = meetingDate - new Date();
    
    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return null;
}

function updateCountdown() {
    const timeLeft = calculateTimeLeft();
    if (timeLeft) {
        document.getElementById('days').textContent = timeLeft.days;
        document.getElementById('hours').textContent = timeLeft.hours;
        document.getElementById('minutes').textContent = timeLeft.minutes;
        document.getElementById('seconds').textContent = timeLeft.seconds;
    }
}

document.getElementById('showCountdownBtn').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('countdownContainer').style.display = 'block';
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
