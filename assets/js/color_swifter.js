const html = document.querySelector('html');
const checkbox = document.querySelector('#switch');


function applyDeviceTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkScheme) {
        checkbox.checked = false;
    } else {
        checkbox.checked = true;
    }
}

applyDeviceTheme();

checkbox.addEventListener('click', function () {
        html.classList.toggle('dark-mode');
});