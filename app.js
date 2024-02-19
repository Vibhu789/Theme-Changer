document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const footer = document.getElementById('footer');

    // Function to check time and apply appropriate theme
    function checkTimeAndApplyTheme() {
        const currentTime = new Date().getHours();
        if (currentTime >= 18 || currentTime < 6) {
            // Night time
            body.classList.add('dark-mode');
            footer.style.display = 'block'; // Show footer in dark mode
        } else {
            // Day time
            body.classList.remove('dark-mode');
            footer.style.display = 'none'; // Hide footer in light mode
        }
    }

    // Initial theme check
    checkTimeAndApplyTheme();

    // Check theme on every hour change
    setInterval(checkTimeAndApplyTheme, 60 * 60 * 1000);

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            footer.style.display = 'block'; // Show footer when dark mode is toggled
        } else {
            footer.style.display = 'none'; // Hide footer when light mode is toggled
        }
    });
});
