import { getCookie } from './cookies.js';

window.addEventListener('load', function () {
	const main = document.getElementById("main-container");
	const bar = document.createElement('div');
	bar.id = 'title-bar';
	bar.className = 'side-to-side';
	main.insertBefore(bar, main.firstChild);

	const index = document.createElement('a');
	index.href = './index.html';
	const indexImg = document.createElement('img');
	indexImg.src = './images/logo.png';
	indexImg.alt = 'Merux Logo';
	indexImg.className = 'logo';
	index.appendChild(indexImg);
	bar.appendChild(index);

	var usernameValue = getCookie("username");
	if (usernameValue == null) {
		const login = document.createElement('a');
		login.href = './login.html';
		login.innerHTML = 'Login';
		bar.appendChild(login);
	} else {
		const logout = document.createElement('a');
		logout.href = './logout.html';
		logout.innerHTML = 'Logout';
		bar.appendChild(logout);

		const username = document.createElement('p');
		username.id = 'myUsername';
		username.innerText = usernameValue;
		bar.appendChild(username);
	}

	const downloads = document.createElement('a');
	downloads.href = './downloads.html';
	downloads.innerHTML = 'Downloads';
	bar.appendChild(downloads);

	const tos = document.createElement('a');
	tos.href = './tos.html';
	tos.innerHTML = 'TOS';
	tos.target = '_blank';
	bar.appendChild(tos);

	const blogs = document.createElement('a');
	blogs.href = './blogs.html';
	blogs.innerHTML = 'Blogs';
	bar.appendChild(blogs);
});