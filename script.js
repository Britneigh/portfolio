"use strict";

function preview1() {
    window.open("https://britneigh.github.io/vertical-slider/");
}
function preview2() {
    window.open("https://britneigh.github.io/DogsTrust/");
}

function preview3() {
    window.open("https://britneigh.github.io/snake-game/");
}
function preview4() {
    window.open("https://britneigh.github.io/digital-clock/");
}
function preview5() {
    window.open("https://britneigh.github.io/colour-buttons/");
}
function preview6() {
    window.open("https://github.com/Britneigh/rock-paper-scissors-game");
}

//Collecting the HTML elements for use in JS
document.querySelector("#German");
const L1 = document.querySelector(".line1");
const L2 = document.querySelector(".line2");
const projects = document.querySelector(".projects");
const home = document.querySelector(".home");
const aboutMe = document.querySelector(".aboutMe");
const contact = document.querySelector(".contact");

//Clicking the German flag will switch the website to German
document.querySelector("#German").onclick = function (){
    L1.innerText = "Hallo! Ich heiße";
    L2.innerText = "Scrollen Sie nach unten, um meine Projekte zu sehen.";
    projects.innerText = "MEINE PROJEKTE";
    home.innerText = "Startseite";
    aboutMe.innerText = "Über mich";
    contact.innerText = "Kontakt";
}

//Clicking the UK flag will switch the website to English
document.querySelector("#English").onclick = function (){
    L1.innerText = "Hi! I am";
    L2.innerText = "Scroll down to take a look at some of my projects";
    projects.innerText = "MY PROJECTS";
    home.innerText = "Home";
    aboutMe.innerText = "About Me";
    contact.innerText = "Contact";
}
