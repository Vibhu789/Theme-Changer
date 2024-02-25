
# Theme Changer

A brief description of project, This Extension adds different theme mode option in the website for user’s. it’s benefits for website handler to show important text using the theme mode, like theme with secret text.

Two option in theme mode, one is Light and second is Dark.
If the theme will be light then the text will   not show on the screen.
If the theme will be dark then the text will show on the screen.
Website handler can change the theme mode by set a timer. Like set the time 60 minutes and        theme will be automatic change, and user can also change the theme.



## Features

- Light/dark mode 
- Live previews
- Fullscreen mode
- Cross platform
- show secret text 


## Usage/Examples

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



## Feedback

If you have any feedback, please reach out to us at https://www.linkedin.com/in/vibhu-tyagi-6a1129220

