import { getCookie } from '/Merux/cookies.js';

window.addEventListener('load', function () {
	const main = document.getElementById("main-container");
	const bar = document.createElement('div');
	bar.id = 'title-bar';
	bar.className = 'side-to-side';
	main.insertBefore(bar, main.firstChild);

	const index = document.createElement('a');
	index.href = '/Merux/index.html';
	const indexImg = document.createElement('img');
	indexImg.src = '/Merux/images/logo.png';
	indexImg.alt = 'Merux Logo';
	indexImg.className = 'logo';
	index.appendChild(indexImg);
	bar.appendChild(index);

	var usernameValue = getCookie("username");
	if (usernameValue == null) {
		const login = document.createElement('a');
		login.href = '/Merux/login.html';
		login.innerHTML = 'Login';
		bar.appendChild(login);
	} else {
		const logout = document.createElement('a');
		logout.href = '/Merux/logout.html';
		logout.innerHTML = 'Logout';
		bar.appendChild(logout);

		const username = document.createElement('p');
		username.id = 'myUsername';
		username.innerText = usernameValue;
		bar.appendChild(username);
	}

	const downloads = document.createElement('a');
	downloads.href = '/Merux/downloads.html';
	downloads.innerHTML = 'Downloads';
	bar.appendChild(downloads);

	const tos = document.createElement('a');
	tos.href = '/Merux/tos.html';
	tos.innerHTML = 'TOS';
	tos.target = '_blank';
	bar.appendChild(tos);

	const blogs = document.createElement('a');
	blogs.href = 'https://github.com/ZombieEnder5/MeruxGame/discussions/categories/announcements';
	blogs.innerHTML = 'Blogs';
	blogs.target = '_blank';
	bar.appendChild(blogs);
});