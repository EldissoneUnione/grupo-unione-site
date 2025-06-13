
let items = document.querySelectorAll(".slider .item");
let next = document.getElementById('nextBtn');
let prev = document.getElementById('prevBtn');
const dotsContainer = document.querySelector('.dots');


let active = 0;

function generateDots() {
    dotsContainer.innerHTML = '';

    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        dot.setAttribute('aria-label', `Slide ${index + 1}`);



        dotsContainer.appendChild(dot);
    });
}

function loadShow() {
    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${250 * stt}px) scale(${1 - 0.2 * stt}) perspective(18px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.7;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-250 * stt}px) scale(${1 - 0.2 * stt}) perspective(18px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
console.log("carregou");

loadShow()
generateDots();

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

