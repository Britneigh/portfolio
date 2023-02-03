//Collecting the HTML elements for use in JS
const home = document.querySelector(".home");
const aboutMe = document.querySelector(".aboutMe");
const contact = document.querySelector(".contact");
const cv = document.querySelector(".cv");
const title = document.querySelector("h1");
const aboutmeText = document.querySelector("#aboutmeText");
const hob1 = document.querySelector("#hobby1");
const hob2 = document.querySelector("#hobby2");
const hob3 = document.querySelector("#hobby3");
const contactInfo = document.querySelector("#contact-title");
var contactArea = document.querySelector("#contact-area")
var nav = document.querySelector("#nav")

//Clicking the German flag will switch the website to German
document.querySelector("#German").onclick = function (){
    home.innerText = "Startseite";
    aboutMe.innerText = "Über mich";
    contact.innerText = "Kontakt";
    title.innerText = "Über mich";
    aboutmeText.innerText = "Ich heiße Britney, komme aus Großbritannien und wohne jetzt mit meinem Mann in Deutschland. Zu meinen Hobbys zählen Kunst und Technik, welche mein Interesse in Web-/Front-End-Entwicklung erklären. Ich erstelle sowie gestalte gerne Webseiten und sorge dafür, dass diese für die beste Benutzererfahrung richtig funktionieren. Unten sind einige meine Lieblingssachen außer programmieren:"
    hob1.innerText = "Gaming ist meine Hauptunterhaltungsform und trainiert auch meine Problemlösungs-, Kommunikations- und Teamfähigkeit.";
    hob2.innerText = "Digitale Kunst ist der Ort für meine Kreativität. Ich nutze mein Kunstwissen, um visuell ansprechende Websitseiten zu erstellen. Manchmal erstelle ich auch Benutzeroberflächen.";
    hob3.innerText = "Wenn mich etwas inspiriert, schreibe ich kreative Geschichten online. Ironischerweise, hat mich das auf den Weg zum programmieren gebracht (Episode Interactive).";
    contactInfo.innerText = "KONTAKT INFO"
}

//Clicking the UK flag will switch the website to English
document.querySelector("#English").onclick = function (){
    home.innerText = "Home";
    aboutMe.innerText = "About Me";
    contact.innerText = "Contact";
    title.innerText = "About Me";
    aboutmeText.innerText = "My name is Britney, currently living in Germany. As someone who has hobbies revolving around both Art and Tech, my interest is in Web/Front-end development. I like creating websites, designing them and of course, making sure they function properly for the best user-experience. Below are some of my favourite things to do aside from coding:";
    hob1.innerText = "Gaming is my main form of entertainment and also trains my problem solving, communication & teamwork skill.";
    hob2.innerText = "Digital art is where I unleash my creativity. I use my art knowledge to create visually appealing websites. Sometimes I also create UI assets.";
    hob3.innerText = "When inspiration strikes, I write creative stories online. Ironically, this lead me to the path of coding (Episode Interactive).";
    contactInfo.innerText = "CONTACT INFO"
}

document.querySelector(".aboutMe").onclick = function (){
    aboutMe.style.color = "rgb(253, 83, 239)";
    contact.style.color = "white";
}
document.querySelector(".contact").onclick = function (){
    contact.style.color = "rgb(253, 83, 239)";
    aboutMe.style.color = "white";
    contactArea.scrollIntoView() //Clicking the contact in nav bar will scroll the page down to the contact info section.
}

//Scrolling back up will move the purple colour from 'Contact' back to 'About Me'.
window.addEventListener("scroll", function (event){
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll > 0){
        contact.style.color = "rgb(253, 83, 239)";
        aboutMe.style.color = "white";
    } else {
        aboutMe.style.color = "rgb(253, 83, 239)";
        contact.style.color = "white";
    }
});

