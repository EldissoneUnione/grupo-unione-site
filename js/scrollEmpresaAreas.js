gsap.registerPlugin(ScrollTrigger);

function initScrollHorizontal() {
  const track = document.getElementById("image-track");
  const images = track.querySelectorAll(".item");
  const totalImages = images.length;

  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  const imageWidth = images[0].offsetWidth;
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    track.style.transform = "translateX(50%)";
    track.style.paddingRight = `${window.innerWidth / 2}px`;
  } else {
    track.style.transform = "translateX(8%)";
    track.style.paddingRight = "";
  }

  const totalContentWidth = (imageWidth * totalImages) + (gap * (totalImages - 1));
  const scrollDistance = totalContentWidth + (isMobile ? 0 : window.innerWidth / 2) - (window.innerWidth / 2);
  const pauseBeforeEnd = (imageWidth + gap) * 1;

  let animation;

  if (isMobile) {
    // no mobile: só começa quando o primeiro item está 100% visível
    ScrollTrigger.create({
      trigger: images[0],
      start: "bottom bottom",
      once: true,
      onEnter: () => {
        animation = gsap.to(track, {
          x: `-${scrollDistance}px`,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".horizontal-scroll-wrapper",
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 0.5,
            invalidateOnRefresh: true,
          }
        });

        ScrollTrigger.create({
          trigger: ".horizontal-scroll-wrapper",
          start: "top top",
          end: `+=${scrollDistance - pauseBeforeEnd}`,
          pin: ".horizontal-scroll-wrapper",
          anticipatePin: 1,
          invalidateOnRefresh: true
        });
      }
    });
  } else {
    // desktop: inicia normalmente
    animation = gsap.to(track, {
      x: `-${scrollDistance}px`,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".horizontal-scroll-wrapper",
        start: "top 55%",
        end: `+=${scrollDistance}`,
        scrub: 0.5,
        invalidateOnRefresh: true,
      }
    });

    ScrollTrigger.create({
      trigger: ".horizontal-scroll-wrapper",
      start: "top top",
      end: `+=${scrollDistance - pauseBeforeEnd}`,
      pin: ".horizontal-scroll-wrapper",
      anticipatePin: 1,
      invalidateOnRefresh: true
    });
  }
}

function resetPinStyles() {
  const pinElements = document.querySelectorAll('[data-scrolltrigger-pin-spacer]');
  pinElements.forEach(spacer => {
    const pinned = spacer.firstElementChild;
    if (pinned && spacer.parentNode) {
      spacer.parentNode.insertBefore(pinned, spacer);
      spacer.parentNode.removeChild(spacer);
    }
  });
}

window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
  resetPinStyles();
  requestAnimationFrame(() => {
    initScrollHorizontal();
    ScrollTrigger.refresh();
  });
});

initScrollHorizontal();



document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".marquee__group").forEach(group => {
    const clone = group.cloneNode(true);
    group.parentElement.appendChild(clone);
  });

  function setupMarquee(selector, direction = 1) {
    const el = document.querySelector(selector);
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;
    const isMobile = window.innerWidth < 768;

    const effectiveDirection = isMobile ? 1 : direction;

    if (isMobile || window.innerHeight < el.scrollHeight) {
      gsap.to(el, {
        x: () => `${-totalWidth * effectiveDirection}px`,
        ease: "none",
        duration: 60,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
        }
      });
    } else {
      gsap.to(el, {
        x: () => `${-totalWidth * effectiveDirection}px`,
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
        }
      });
    }
  }

  setupMarquee(".marquee", 1);
  setupMarquee(".marquee--reverse", -1);
});
