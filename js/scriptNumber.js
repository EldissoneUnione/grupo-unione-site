
const svg = document.getElementById('donut');
const infoPercent = document.getElementById('infoPercent');
const infoDesc = document.getElementById('infoDesc');

const segments = [
    { start: 0, end: 31, color: '#b52e0f', label: "describe: 7%" },
    { start: 30, end: 61, color: '#b52e0f', label: "A2: 8%" },
    { start: 60, end: 86, color: '#f2a900', label: "B1: 20%" },
    { start: 85, end: 96, color: '#f2a900', label: "B2: 10%" },
    { start: 95, end: 101, color: '#f2a900', label: "B2: 5%" },
    { start: 100, end: 106, color: '#f2a900', label: "B2: 5%" },
    { start: 105, end: 121, color: '#f2a900', label: "B3: 15%" },
    { start: 120, end: 151, color: '#27ae60', label: "C1: 9%" },
    { start: 150, end: 181, color: '#27ae60', label: "C2: 9%" },
    { start: 180, end: 211, color: '#2980b9', label: "D1: 10%" },
    { start: 210, end: 241, color: '#2980b9', label: "D2: 10%" },
    { start: 240, end: 251, color: '#8e44ad', label: "E1: 12%" },
    { start: 250, end: 281, color: '#8e44ad', label: "E2: 12%" },
    { start: 280, end: 301, color: '#16a085', label: "F1: 2%" },
    { start: 300, end: 321, color: '#16a085', label: "F2: 6%" },
    { start: 320, end: 361, color: '#16a085', label: "F3: 4%" },
];

function polarToCartesian(cx, cy, r, angle) {
    const rad = (angle - 90) * Math.PI / 180.0;
    return {
        x: cx + (r * Math.cos(rad)),
        y: cy + (r * Math.sin(rad))
    };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, startAngle);
    const end = polarToCartesian(cx, cy, r, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", r, r, 0, largeArcFlag, 1, end.x, end.y].join(" ");
}

function splitLabel(label) {
    const parts = label.split(":");
    return {
        desc: parts[0]?.trim() || "",
        percent: parts[1]?.trim() || ""
    };
}


let activeSegment = segments[0];
segments.forEach((seg, i) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", describeArc(50, 50, 40, seg.start, seg.end));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", seg.color);
    path.setAttribute("stroke-width", 18);
    path.setAttribute("stroke-linecap", "0");

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.addEventListener("mouseenter", () => {
        if (activeSegment && activeSegment !== seg) {
            activeSegment.el.setAttribute("d", describeArc(50, 50, 40, activeSegment.start, activeSegment.end));
            activeSegment.el.style.filter = "none";
        }
        path.setAttribute("d", describeArc(50, 50, 40.1, seg.start, seg.end));
        path.style.strokeWidth = 18;
        path.style.filter = "url(#dropShadow)";

        const split = splitLabel(seg.label);
        infoPercent.textContent = split.percent;
        infoDesc.textContent = split.desc;
    });

    path.addEventListener("mouseleave", () => {
        activeSegment = seg;
        activeSegment.el.setAttribute("d", describeArc(50, 50, 40.1, activeSegment.start, activeSegment.end));
        activeSegment.el.style.strokeWidth = 18;
        activeSegment.el.style.filter = "url(#dropShadow)";
        const split = splitLabel(activeSegment.label);
        infoPercent.textContent = split.percent;
        infoDesc.textContent = split.desc;
    });

    svg.appendChild(path);
    seg.el = path;
    seg.length = length;

    if (i === 0) {
        path.setAttribute("d", describeArc(50, 50, 40.1, seg.start, seg.end));
        path.style.strokeWidth = 18;
        path.style.filter = "url(#dropShadow)";
        path.style.strokeDashoffset = 0;

        const split = splitLabel(seg.label);
        infoPercent.textContent = split.percent;
        infoDesc.textContent = split.desc;
        activeSegment = seg;
    }
});

let observerN = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) startAnimation();
    });
}, { threshold: 0.5 });
observerN.observe(svg);

function easeOutQuad(t) {
    return t * (2 - t);
}

function startAnimation() {
    let current = 0;
    let progress = 0;
    let speed = 60;

    segments.forEach(s => s.el.style.strokeDashoffset = s.length);
    infoPercent.textContent = "";
    infoDesc.textContent = "";

    function animate() {
        if (current < segments.length) {
            const s = segments[current];
            progress += speed / 100;

            if (progress > 1) progress = 1;

            const easedProgress = easeOutQuad(progress);
            const offset = s.length * (1 - easedProgress);
            s.el.style.strokeDashoffset = offset;

            if (progress >= 1) {
                current++;
                progress = 0;
            }

            requestAnimationFrame(animate);
        }
    }
    animate();
}

