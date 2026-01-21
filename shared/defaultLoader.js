const meta = document.createElement("meta");
meta.charset = 'utf-8';
document.head.appendChild(meta);

const title = document.createElement("title");
title.innerHTML = 'Merux';
document.head.appendChild(title);

const icon = document.createElement("link");
icon.rel = 'icon';
icon.type = 'image/x-icon';
icon.href = 'images/favicon.ico';
document.head.appendChild(icon);

const sheet = document.createElement("link");
sheet.rel = 'stylesheet/less';
sheet.type = 'text/css';
sheet.href = 'index.css';
document.head.appendChild(sheet);

const lessScript = document.createElement('script');
lessScript.src = 'https://cdn.jsdelivr.net/npm/less';
document.head.appendChild(lessScript);

const sharedElements = document.createElement("script");
sharedElements.type = 'module';
sharedElements.src = 'sharedElements.js';
document.body.appendChild(sharedElements);