const h2 = document.createElement("h2");
h2.textContent = "Welcome to my COOL WEBSITE";

h2.appendChild(document.createElement('br'));
h2.appendChild(document.createElement('br'));
h2.appendChild(document.createElement('br'));
document.querySelector("body").appendChild(h2);


const fireTop = document.createElement("img");
fireTop.src = './img/fire.gif';
document.querySelector("body").appendChild(fireTop);


const fatCat = document.createElement("img");
fatCat.src = './img/fatcat.webp';
document.querySelector("body").appendChild(fatCat);

const fireBottom = document.createElement("img");
fireBottom.src = './img/fire.gif';
document.querySelector("body").appendChild(fireBottom);