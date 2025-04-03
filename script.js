function sayHello() {
    alert("Hello! Thanks for visiting my website.");
}
function changeText() {
    let paragraph = document.querySelector("p");
    paragraph.innerText = "You clicked the button!";
}
function askName() {
    let name = prompt("What's your name?");
    if (name) {
        let greeting = document.querySelector("h1");
        greeting.innerText = "Hello, " + name + "!";
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerText = timeString;
}
setInterval(updateClock, 1000);
async function getQuote() {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    document.getElementById("quote").innerText = data.content;
}
