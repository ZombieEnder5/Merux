window.addEventListener('load', function () {
	const bg = document.getElementById('parallax-bg');
	function init() {
		window.addEventListener('scroll', function () {
			const max = document.body.scrollHeight - window.innerHeight;
			const y = window.scrollY;
			const perc = y / max;
			const imgH = bg.offsetHeight;
			const tray = perc * (imgH - window.innerHeight);
			bg.style.transform = `translateY(-${tray}px)`;
		});
	}
	if (bg.complete && bg.naturalWidth > 0) {
		init();
	} else {
		bg.onload = init;
	}
});