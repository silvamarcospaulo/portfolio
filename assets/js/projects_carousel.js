let items = document.querySelectorAll(".container_carousel .project_item");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

let active = 0;

function loadShow() {
    let stt = 0;

    items.forEach((item, index) => {
        item.style.transform = `translateX(0) scale(1)`;
        item.style.zIndex = 0;
        item.style.filter = `none`;
        item.style.opacity = 1;
    });

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = `none`;
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(10px) rotate(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(5px)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(10px) rotate(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(5px)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

next.onclick = function () {
    active = (active + 1) % items.length;
    loadShow();
}

prev.onclick = function () {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}