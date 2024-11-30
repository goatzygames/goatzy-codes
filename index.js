let username;

document.getElementById("SubmitButton").onclick = function() {
    const now = new Date(); // Create a new Date object for each click
    const Firsthours = now.getHours();
    const Firstminutes = now.getMinutes();

    if (document.getElementById("Input").value === "") {
        document.getElementById("Paragraph").textContent = `(${Firsthours}:${Firstminutes}) The input is empty.`
    } else {
            // Get the username from the input field
    username = document.getElementById("Input").value;

    // Set the paragraph text content with the formatted time and username
    document.getElementById("Paragraph").textContent = `(${Firsthours}:${Firstminutes}) Your name is now "${username}"`;
    }
}

let numbercount = 0

document.getElementById("DecreaseButton").onclick = function(){
    numbercount--;
    document.getElementById("SetNumber").textContent = numbercount;
}

document.getElementById("ResetButton").onclick = function(){
    numbercount = 0;
    document.getElementById("SetNumber").textContent = numbercount;
}

document.getElementById("IncreaseButton").onclick = function(){
    numbercount++;
    document.getElementById("SetNumber").textContent = numbercount;
}

let RandomNum = Math.floor(Math.random() * 100)
let maxNumber = 100
let minNumber = -100

document.getElementById("RandomButton").onclick = function(){
    RandomNum = Math.floor(Math.random() * (maxNumber - minNumber)) +minNumber;
    numbercount = RandomNum
    document.getElementById("SetNumber").textContent = RandomNum
}

let now = new Date();
let hours = now.getHours();

if (hours >= 6 && hours < 12) {
    let message = "Good morning";
    document.getElementById("Welcome").textContent = `${message}! Here are some of my small projects!`;
} else if (hours >= 12 && hours < 18) {
    let message = "Good afternoon";
    document.getElementById("Welcome").textContent = `${message}! Here are some of my small projects!`;
} else {
    let message = "Good evening";
    document.getElementById("Welcome").textContent = `${message}! Here are some of my small projects!`;
}

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

document.getElementById("MenuButton").onclick = function () {

    let LitTheMenu = document.getElementsByClassName("LiterallyTheMenu")[0];

    let CheckMenu = document.getElementById("TheMenu")

    let LitTheMenuVis = getComputedStyle(CheckMenu).visibility;
    console.log(LitTheMenu)

    // toggle visibility
    if (LitTheMenuVis === "visible") {
        LitTheMenu.style.visibility = "hidden"; 
    } else {
        LitTheMenu.style.visibility = "visible"; 
    }
}

"use strict";

const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
}

const userComment = document.querySelector(".userComment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", e => {
    if(!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled")
    }else {
        publishBtn.removeAttribute("disabled")
    }
})