import {getCookie} from './cookies.js';

window.addEventListener('load', function () {
	const main = document.getElementById("main-container");
	const bar = document.createElement('ul');
	bar.className = 'navbar';
	main.insertBefore(bar, main.firstChild);
	
	function addButton(txt, addr) {
		var item = document.createElement('li');
		var a = document.createElement('a');
		a.href = addr;
		a.innerText = txt;
		item.appendChild(a);
		bar.appendChild(item);
		return a;
	}
	
	function addRightText(txt) {
		var item = document.createElement('li');
		item.className = "right-align";
		var p = document.createElement('p');
		p.innerText = txt;
		item.appendChild(p);
		bar.appendChild(item);
		return p;
	}
	
	function addRightButton(txt, addr) {
		var item = document.createElement('li');
		item.className = "right-align";
		var a = document.createElement('a');
		a.href = addr;
		a.innerText = txt;
		item.appendChild(a);
		bar.appendChild(item);
		return a;
	}

	addButton('Home','index.html');
	addButton('Downloads','downloads.html');
	var blogA = addButton('Blogs','https://github.com/ZombieEnder5/MeruxGame/discussions/categories/announcements');
	blogA.target = '_blank';

	var usernameValue = getCookie("username");
	if (usernameValue == null) {
		addRightButton('Login','login.html');
	} else {
		addRightText(usernameValue);
		addRightButton('Logout','logout.html');
	}
});