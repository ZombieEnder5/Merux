import {getCookie} from './cookies.js';

window.addEventListener('load', function () {
	const support = document.createElement('p');
	support.className = 'out-of-window-element';
	support.innerHTML = 'Have an issue? <a href="mailto:ZombieEnder5@proton.me">Contact support</a>.';
	document.body.appendChild(support);
	
	const lastUpdated = document.createElement('p');
	lastUpdated.className = 'last-updated';
	lastUpdated.innerText = 'Last updated on 1/20/2026 at 7:07 PM (UTC-8)';
	document.body.appendChild(lastUpdated);
	
	const siteWindow = document.getElementById("site-window");
	
	const siteHeader = document.createElement('header');
	siteHeader.className = "site-header";
	document.body.insertBefore(siteHeader, siteWindow);
	
	const regularSiteHeader = document.createElement('header');
	regularSiteHeader.className = "regular-site-header";
	siteHeader.appendChild(regularSiteHeader);
	
	const leftSiteHeader = document.createElement('header');
	leftSiteHeader.className = "left-site-header";
	regularSiteHeader.appendChild(leftSiteHeader);
	
	const rightSiteHeader = document.createElement('header');
	rightSiteHeader.className = "right-site-header";
	regularSiteHeader.appendChild(rightSiteHeader);
	
	const siteLogo = document.createElement('a');
	siteLogo.className = 'site-logo';
	siteLogo.href = 'index.html';
	leftSiteHeader.appendChild(siteLogo);
	
	const siteLogoInner = document.createElement('img');
	siteLogoInner.src = 'images/logo.png';
	siteLogoInner.height = '42';
	siteLogoInner.alt = 'Merux';
	siteLogo.appendChild(siteLogoInner);
	
	const disclaimerHeader = document.createElement('header');
	disclaimerHeader.className = 'disclaimer-header';
	siteHeader.appendChild(disclaimerHeader);
	
	const copyrightDisclaimer = document.createElement('p');
	copyrightDisclaimer.className = 'copyright-disclaimer';
	copyrightDisclaimer.innerHTML = '<font color="#ff0000">Warning:</font> Merux is <b>not</b> Roblox&reg;, nor is it affiliated with Roblox Corporation. For more information, please visit the <a href="disclaimer.html">disclaimer</a>.';
	disclaimerHeader.appendChild(copyrightDisclaimer);
	
	const innerHeader = document.createElement('header');
	innerHeader.className = "inner-header";
	siteWindow.insertBefore(innerHeader, siteWindow.firstChild);
	
	function cleanPath(p) {
		var c = p.startsWith('/') ? p : '/' + p;
		return c.replace(/\/index\.html$/,'/');
	}
	
	function addButton(txt, addr) {
		var a = document.createElement('a');
		var span = document.createElement('span');
		a.href = addr;
		span.innerText = txt;
		var u = new URL(addr, document.baseURI);
		if (cleanPath(u.pathname) === cleanPath(window.location.pathname))
			a.className = "current-page-button";
		a.appendChild(span);
		innerHeader.appendChild(a);
		return a;
	}
	
	/*function addRightText(txt) {
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
	}*/

	addButton('Home','index.html');
	var blogA = addButton('Blogs','https://github.com/ZombieEnder5/MeruxGame/discussions/categories/announcements');
	blogA.target = '_blank';
	addButton('Downloads','downloads.html');

	var usernameValue = getCookie("username");
	if (usernameValue == null) {
		var login = document.createElement('a');
		login.className = 'menu-link';
		login.href = 'login.html';
		login.innerText = 'Login';
		rightSiteHeader.appendChild(login);
	} else {
		var p = document.createElement('p');
		p.className = 'menu-link';
		p.innerText = usernameValue;
		rightSiteHeader.appendChild(p);
		
		var logout = document.createElement('a');
		logout.className = 'menu-link';
		logout.href = 'logout.html';
		logout.innerText = 'Logout';
		rightSiteHeader.appendChild(logout);
	}
});