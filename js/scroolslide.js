document.addEventListener('DOMContentLoaded', () => {
    const numSections = document.querySelectorAll('.numsection');
   
    window.addEventListener('scroll', () => {
        numSections.forEach(numsection => {
            const rect = numsection.getBoundingClientRect();
            const computedTop = getComputedStyle(numsection).top;
            let targetTop = computedTop.includes('vh') ?
                window.innerHeight * parseFloat(computedTop) / 100 :
                parseFloat(computedTop);

            let distance = rect.top - targetTop;
            let radius = 50;

            if (distance <= 0) {
                const progress = Math.min(1, Math.abs(distance) / 100);
                radius = 50 - progress * 40;
            }
            numsection.style.borderRadius = `${radius}px`;
        });
    });

    const counters = document.querySelectorAll('tspan[data-target]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) animateCounter(entry.target);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const speed = 100;
        const increment = target / speed;
        let count = 0;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    }

    const donuts = document.querySelectorAll('.donut-fill');
    const donutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.strokeDashoffset = 0;
            }
        });
    }, { threshold: 0.5 });

    donuts.forEach(donut => donutObserver.observe(donut));
    

    window.dispatchEvent(new Event('scroll'));
});
