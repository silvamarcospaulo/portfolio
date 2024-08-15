const html = document.querySelector('html');
const checkbox = document.querySelector('#switch');

checkbox.addEventListener('click', function () {
    html.classList.toggle('dark-mode');
});