const meta = document.createElement("meta");
meta.charset = 'utf-8';
document.head.appendChild(meta);

const title = document.createElement("title");
title.innerHTML = 'Merux';
document.head.appendChild(title);

const icon = document.createElement("link");
icon.rel = 'icon';
icon.type = 'image/x-icon';
icon.href = '/Merux/images/favicon.ico';
document.head.appendChild(icon);

const sheet = document.createElement("link");
sheet.rel = 'stylesheet';
sheet.href = '/Merux/index.css';
document.head.appendChild(sheet);

const backscroll = document.createElement("script");
backscroll.type = 'text/javascript';
backscroll.src = '/Merux/backscroll.js';
document.body.appendChild(backscroll);

const sharedTitleBar = document.createElement("script");
sharedTitleBar.type = 'module';
sharedTitleBar.src = '/Merux/sharedTitleBar.js';
document.body.appendChild(sharedTitleBar);

const titleSwap = document.createElement("script");
titleSwap.type = 'text/javascript';
titleSwap.src = '/Merux/titleSwap.js';
document.body.appendChild(titleSwap);