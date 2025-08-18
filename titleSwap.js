const gameTitle = 'Merux';

window.addEventListener("load", () => {
	var items = document.getElementsByTagName('p');
	for (var i = 0; i < items.length; i++) {
		const p = items.item(i);
		p.innerHTML = p.innerHTML.replaceAll(':TITLE', gameTitle);
	}
});