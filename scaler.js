(function () {
    const DESIGN_W = 1504;
    const DESIGN_H = 898;
    const wrap = document.getElementById('scale-wrap');

    function applyScale() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const scale = Math.min(vw / DESIGN_W, vh / DESIGN_H);
        wrap.style.transform = 'scale(' + scale + ')';
    }
    let resizeTimer = null;
    window.addEventListener('resize', function () {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            applyScale();
        }, 50);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyScale);
    } else {
        applyScale();
    }
})();