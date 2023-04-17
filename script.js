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

//Collecting the HTML elements for use in JS
document.querySelector("#German");
const L1 = document.querySelector(".line1");
const L2 = document.querySelector(".line2");
const projects = document.querySelector(".projects");
const home = document.querySelector(".home");
const aboutMe = document.querySelector(".aboutMe");
const contact = document.querySelector(".contact");
const cv = document.querySelector(".cv");

//Clicking the German flag will switch the website to German
document.querySelector("#German").onclick = function (){
    L1.innerText = "Hallo! Wilkommen auf meiner Portfolio-Seite!";
    L2.innerText = "Scrollen Sie nach unten, um meine Projekte zu sehen.";
    projects.innerText = "MEINE PROJEKTE";
    home.innerText = "Startseite";
    aboutMe.innerText = "Über mich";
    contact.innerText = "Kontakt";
    cv.innerText = "Lebenslauf";
}

//Clicking the UK flag will switch the website to English
document.querySelector("#English").onclick = function (){
    L1.innerText = "Hi there, welcome to my Portfolio page!";
    L2.innerText = "Scroll down to take a look at my projects";
    projects.innerText = "MY PROJECTS";
    home.innerText = "Home";
    aboutMe.innerText = "About Me";
    contact.innerText = "Contact";
    cv.innerText = "CV";
}
