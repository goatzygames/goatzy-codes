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
};

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

// Check if there are saved comments in localStorage and display them
window.onload = function() {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
        comments.innerHTML = savedComments; // Load comments from localStorage
        updateCommentCount();
    }
};

// Enable or disable the publish button based on user input
userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
});

// Function to add a comment
function addPost() {
    console.log("The button works");

    if (!userComment.value) return;

    // Set the user name from the input
    userId.name = userName.value || "Anonymouse"; // If no name, set default to "Anonymouse"
    if (userId.name === "Anonymouse") {
        userId.identity = false;
        userId.image = "anonymousecommenter.png";
    } else {
        userId.identity = true;
        userId.image = "commenterpng.png";
    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();

    // Create the HTML for the new comment
    let published = `
        <div class="parents">
            <img src="${userId.image}" alt="User Image">
            <div>
                <h1>${userId.name}</h1>
                <p>${userId.message}</p>
                <div class="engagements">
                    <img src="like.png" alt="Like">
                    <img src="share.png" alt="Share">
                </div>
                <span class="date">${userId.date}</span>
            </div>
        </div>
    `;

    // Append the comment to the page
    comments.innerHTML += published;

    // Save the updated comments to localStorage
    localStorage.setItem("comments", comments.innerHTML);

    // Reset the input field
    userComment.value = "";
    
    // Update the comment count
    updateCommentCount();

    // Send the comment via EmailJS
    sendEmail(userId);
}

// Function to update the comment count
function updateCommentCount() {
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("Comment").textContent = commentsNum;
}

// Function to send email using EmailJS
function sendEmail(userId) {
    const templateParams = {
        to_name: "dev@goatzy-codes.xyz", // Your email
        from_name: userId.name || "Anonymouse", // Name of the commenter
        message: userId.message, // The comment message
    };

    emailjs.send("service_z6as17f", "template_kiwhxjn", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.log("Email sending failed:", error);
        });
}

// Attach event listener to the publish button
publishBtn.addEventListener("click", addPost);

document.getElementById("password");

const locstorresetpass = ("LocalStorageReset0010");
let passwordinputvalue = document.getElementById("password").value;

document.getElementById("PasswordButton").onclick = function() {
    passwordinputvalue = document.getElementById("password").value;
    if (passwordinputvalue === locstorresetpass) {
        localStorage.clear();
        alert("Local storage has been cleared successfully.");
    }
};
