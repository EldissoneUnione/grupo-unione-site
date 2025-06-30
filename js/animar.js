function animateTxt(el) {
    gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
}

document.querySelectorAll(".card-baner").forEach(card => {
    if (card.classList.contains("active")) {
        animateTxt(card.querySelector(".txt"));
    }
});

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.attributeName === "class") {
            const target = mutation.target;
            if (target.classList.contains("active")) {
                animateTxt(target.querySelector(".txt"));
            }
        }
    });
});

document.querySelectorAll(".card-baner").forEach(card => {
    observer.observe(card, { attributes: true });
});


const cards = gsap.utils.toArray(".destaque-section .card");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".destaque-section",
    pin: true,
    scrub: 1.1,
    end: `+=${window.innerHeight * (1 + cards.length * 0.25)}`,
  }
});

tl.to(".destaque-section h1", {
  scale: 1.5,
  duration: 0,
  ease: "power2.inOut"
});

tl.fromTo(cards,

);

