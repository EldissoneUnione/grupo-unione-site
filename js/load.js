window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    const logo = document.getElementById('loading-logo');
    const header = document.querySelector('.logo-content');
    const siteContent = document.querySelector('.site-content');
    const typeText = document.getElementById('type-text');

    const message = "Grupo Unione";
    let index = 0;

    gsap.from(logo, {
        scale: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
            typeWriter(); 
        }
    });

    function typeWriter() {
        if (index < message.length) {
            const span = document.createElement('span');
            span.textContent = message.charAt(index);
            typeText.appendChild(span);

            gsap.from(span, {
                y: 30,
                scale: 0.5,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out"
            });

            index++;
            setTimeout(typeWriter, 100);
        } else {
            const tl = gsap.timeline();

            tl.to(typeText, {
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out"
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
    }

    function startFlip() {
        const state = Flip.getState(logo);
        header.appendChild(logo);

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
                }
            });
        })

        .to(loader, {
            opacity: 0,
            duration: 0.8
        }, "<") 

        .to(siteContent, {
            opacity: 1,
            duration: 0.5
        }, "<"); 
    }
});
