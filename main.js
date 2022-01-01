const menu = document.querySelector('.nav .menu');
const toggle = document.querySelectorAll('.toggle');
const closeButton = document.querySelector('.icon-cross')

for(const element of toggle) {
    element.addEventListener('click', () => {
        menu.classList.toggle('show');
        closeButton.classList.toggle('close');
    });
}
