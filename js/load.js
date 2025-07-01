window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    const logo = document.getElementById('logo-svg'); 
    const logoContent = document.querySelector('.logo-content'); 
    const siteContent = document.querySelector('.site-content');
    const typeText = document.getElementById('type-text');

    const message = "GRUPO UNIONE";
    let index = 0;

    const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });

    ["#circle1", "#circle2", "#circle3"].forEach((selector, i) => {
        const circle = document.querySelector(selector);
        const length = circle.getTotalLength();

        gsap.set(circle, {
            strokeDasharray: length,
            strokeDashoffset: length
        });

        tl.to(circle, {
            strokeDashoffset: 0
        }, i * 0.5);
    });

    tl.add(() => {
        typeWriter();
    });

    function typeWriter() {
        if (index < message.length) {
            const span = document.createElement('span');
            span.textContent = message.charAt(index);
            typeText.appendChild(span);

            gsap.from(span, {
                y: 20,
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });

            index++;
            setTimeout(typeWriter, 200);
        } else {
            animateAfterType();
        }
    }

    function animateAfterType() {
        const tl = gsap.timeline();

        tl.to(typeText, {
            scale: 1.2,
            duration: 0.4,
            ease: "power2.out"
        })
        .to(logo, {
            y: -15,
            duration: 0.4,
            ease: "bounce.out"
        })
        .to(logo, {
            y: -50,
            duration: 1,
            ease: "power2.inOut"
        })
        .to(typeText, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.in"
        }, "<")
        .add(() => {
            startFlip();
        });
    }

    function startFlip() {
        const state = Flip.getState(logo);
        logoContent.appendChild(logo);

        const tl = gsap.timeline({
            onComplete: () => {
                loader.style.display = "none";
            }
        });

        tl.add(() => {
            Flip.from(state, {
                duration: 0.8,
                ease: "power2.in",
                absolute: true,
                onComplete: () => {
                    gsap.fromTo(logo,
                        { y: -10 },
                        { y: 0, duration: 0.6, ease: "bounce.out" }
                    );

                    let logoImg = "";
                    if (window.innerWidth <= 768) {
                        // Mobile
                        logoImg = `<img  src="assets/logo/Grupo-Unione_Logo.png" alt="Logo do Grupo Unione mobile"
                                         style="height:100%; width:auto;" />`;
                    } else {
                        // Desktop
                        logoImg = `<img src="assets/logo/Grupo-Unione_Logotipo.png" alt="Logo do Grupo Unione Desktop"
                                         style="height:100%; width:auto;" />`;
                    }
                    logoContent.innerHTML = logoImg;
                }
            });
        })
        .to(loader, {
            opacity: 0,
            duration: 0.8,
        }, "<")
        .to(siteContent, {
            opacity: 1,
            duration: 0.8
        }, "<");
    }
});
