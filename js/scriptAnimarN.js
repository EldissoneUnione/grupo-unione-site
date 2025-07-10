import { createTimeline, utils, stagger, createSpring, animate, svg, waapi } from './anime.esm.js';

const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const rows = +utils.get(document.body, '--rows');
const grid = [rows, rows];
const numberOfElements = rows * rows;
var animation;

for (let i = 0; i < numberOfElements; i++) {
    const dotEl = document.createElement('div');
    dotEl.classList.add('dotClientes');
    fragment.appendChild(dotEl);
}

staggerVisualizerEl.appendChild(fragment);

let index = utils.random(0, numberOfElements);
let nextIndex = 0;

utils.set('.cursor', {
    x: stagger('-1rem', { grid, from: index, axis: 'x' }),
    y: stagger('-1rem', { grid, from: index, axis: 'y' })
});

function animateGrid() {

    if (animation) animation.pause();

    nextIndex = utils.random(0, numberOfElements);

    animation = createTimeline({
        defaults: {
            ease: 'inOutQuad',
        },
        onComplete: animateGrid
    })
        .add('.cursor', {
            keyframes: [
                { scale: .625 },
                { scale: 1.125 },
                { scale: 1 }
            ],
            duration: 600
        })
        .add('.dotClientes', {
            keyframes: [
                {
                    x: stagger('-.175rem', { grid, from: index, axis: 'x' }),
                    y: stagger('-.175rem', { grid, from: index, axis: 'y' }),
                    duration: 200
                }, {
                    x: stagger('.125rem', { grid, from: index, axis: 'x' }),
                    y: stagger('.125rem', { grid, from: index, axis: 'y' }),
                    scale: 2,
                    duration: 500
                }, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 600,
                }
            ],
            delay: stagger(50, { grid, from: index }),
        }, 0)
        .add('.cursor', {
            x: { from: stagger('-1rem', { grid, from: index, axis: 'x' }), to: stagger('-1rem', { grid, from: nextIndex, axis: 'x' }), duration: utils.random(800, 1200) },
            y: { from: stagger('-1rem', { grid, from: index, axis: 'y' }), to: stagger('-1rem', { grid, from: nextIndex, axis: 'y' }), duration: utils.random(800, 1200) },
            ease: 'outCirc'
        }, '-=1500')

    index = nextIndex;

}

animateGrid();

const shapeEls = document.querySelectorAll('.shape');
const triangleEl = document.querySelector('.layered-animations polygon');
const points = triangleEl.getAttribute('points').split(' ').map(v => +v);
const eases = ['inOutQuad', 'inOutCirc', 'inOutSine', createSpring()];

function createKeyframes(value) {
    var keyframes = [];
    for (let i = 0; i < 100; i++) {
        keyframes.push({
            to: value,
            ease: utils.randomPick(eases),
            duration: utils.random(300, 1600)
        });
    }
    return keyframes;
}

function animateShape(el) {

    const circleEl = el.querySelector('circle');
    const rectEl = el.querySelector('rect');
    const polyEl = el.querySelector('polygon');

    const animation = createTimeline({
        onComplete: () => animateShape(el),
    })
        .add(el, {
            translateX: createKeyframes(() => utils.random(-2, 2) + 'rem'),
            translateY: createKeyframes(() => utils.random(-2, 2) + 'rem'),
            rotate: createKeyframes(() => utils.random(-100, 100)),
        }, 0)
    if (circleEl) {
        animation.add(circleEl, {
            r: createKeyframes(() => utils.random(24, 36)),
        }, 0);
    }
    if (rectEl) {
        animation.add(rectEl, {
            width: createKeyframes(() => utils.random(36, 46)),
            height: createKeyframes(() => utils.random(36, 46)),
        }, 0);
    }
    if (polyEl) {
        animation.add(polyEl, {
            points: createKeyframes(() => {
                const s = utils.random(.9, 1.6, 3);
                return `
        ${points[0] * s} ${points[1] * s} ${points[2] * s} ${points[3] * s} ${points[4] * s} ${points[5] * s}
        `;
            }),
        }, 0);
    }

    animation.init();

}

for (var i = 0; i < shapeEls.length; i++) {
    animateShape(shapeEls[i]);
}


const projetAnimar = document.querySelector('.project-visualizer');
const Projectfragment = document.createDocumentFragment();
const ProjectnumberOfElements = 31;

for (let i = 0; i < ProjectnumberOfElements; i++) {
    Projectfragment.appendChild(document.createElement('div'));
}

projetAnimar.appendChild(Projectfragment);

const PstaggersAnimation = createTimeline({
    defaults: {
        ease: 'inOutSine',
        delay: stagger(50),
        duration: 600,
    },
    loop: true,
    autoplay: false,
})
    .add('.project-visualizer div', {
        scale: stagger([1.5, 1], { from: 'center', grid: [9, 9] }),
        translateX: stagger([-50, 50]),
        rotate: stagger([-45, 45]),
        ease: 'inOutCirc',
        delay: stagger(10, { from: 'center' })
    })
    .add('.project-visualizer div', {
        scale: stagger([1.5, 1], { from: 'center', ease: 'inOutCirc' }),
        translateX: stagger([-30, 30]),
        translateY: stagger([-30, 30]),
        rotate: 0,
        delay: stagger(1, { from: 'last' })
    })
    .add('.project-visualizer div', {
        rotate: stagger(1, { from: 'center', ease: 'inSine' }),
        translateX: 0,
        translateY: 0,
        delay: stagger(10, { from: 'center' })
    })
    .add('.project-visualizer div', {
        scale: stagger([1.5, 1], { grid: [9, 9], axis: 'y' }),
        translateY: stagger([-30, 40], { grid: [9, 9], axis: 'y' }),
        rotate: 0,
        delay: stagger(1, { from: 'last' })
    })
    .add('.project-visualizer div', {
        translateX: () => utils.random(-50, 50),
        translateY: () => utils.random(-50, 50),
        scale: stagger([1.5, .5], { from: 'center' }),
        rotate: stagger([10, -10], { from: 'last' }),
        delay: stagger(50, { from: 'center', grid: [9, 9] }),
    })
    .add('.project-visualizer div', {
        translateX: () => utils.random(-50, 50),
        translateY: () => utils.random(-50, 50),
        rotate: stagger([-10, 10], { from: 'last' }),
        scale: 1,
        delay: stagger(50, { from: 'center', grid: [9, 9] }),
    })
    .add('.project-visualizer div', {
        translateX: 0,
        translateY: stagger(6, { from: 'center' }),
        rotate: 0,
        delay: stagger(50, { from: 'center', grid: [9, 9] }),
    })
    .add('.project-visualizer div', {
        translateX: stagger('1rem', { grid: [9, 9], from: 'center', axis: 'x' }),
        delay: stagger(200, { grid: [9, 9], from: 'center' })
    })
    .add('.project-visualizer div', {
        translateX: stagger([20, -20], { from: 'first' }),
        translateY: 0,
        rotate: stagger([20, -20], { from: 'first' }),
        delay: stagger(10, { from: 'first' }),
    })

    .add('.project-visualizer div', {
        translateX: 0,
        translateY: 0,
        scale: 1,
        rotate: 360,
        duration: 2000,
        delay: 0,
    });

PstaggersAnimation.play();


const $animation = document.querySelector('.animation');
const total = 12;

for (let i = 0; i < total; i++) {
    const $square = document.createElement('div');
    $square.classList.add('square', 'red');
    utils.set($square, { rotate: (i / total) * 360, translateY: 80 })
    $animation.appendChild($square);
}

waapi.animate('.square', {
    transform: (_, i) => `rotate(${(i / total) * 360}deg) translateY(100px) scaleX(.25)`,
    backgroundColor: {
        to: [`var(--text-color)`, `var(--text-color-black)`],
        ease: 'linear',
        duration: 3000,
    },
    ease: createSpring({ stiffness: 100 }),
    loop: true,
    alternate: true,
    delay: stagger(95),
}).seek(10000)


