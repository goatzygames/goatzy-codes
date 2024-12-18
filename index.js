window.onload = SetTime();

document.getElementById("MenuButton").onclick = function () {
    console.log("Hey it works!")
    let LitTheMenu = document.getElementsByClassName("TheMenu")[0];  // Use class instead of id

    let LitTheMenuVis = getComputedStyle(LitTheMenu).visibility;  // Check computed visibility

    console.log(LitTheMenu)

    // Assuming canClickMenu is true for this example
    let canClickMenu = true;

    if (canClickMenu) {
        if (LitTheMenuVis === "visible") {
            LitTheMenu.style.visibility = "hidden"; 
        } else {
            LitTheMenu.style.visibility = "visible"; 
        }
    }
}

// Array of elevator music files
const audioFiles = [
    "/Sounds/elevatormusic.mp3",
    "/Sounds/elevatormusic2.mp3",
    "/Sounds/elevatormusic3.mp3"
];

// Create the audio object for the button click sound
var buttonclick1 = new Audio("Sounds/buttonclick1.mp3");

// Get all button elements on the page
var buttons = document.querySelectorAll("button");

// Loop through all buttons and add event listeners
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // If the sound is already playing, reset it to start from the beginning
        if (!buttonclick1.paused) {
            buttonclick1.currentTime = 0; // Reset the sound to the start
        }
        buttonclick1.play();  // Play sound when any button is clicked
    });
});

// Function to choose a random elevator music file and play it
function playRandomElevatorMusic() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length); // Random index from array
    const elevatorMusic = new Audio(audioFiles[randomIndex]); // Create new Audio object for the selected music
    
    elevatorMusic.loop = true; // Loop the music
    elevatorMusic.play(); // Play the music
    return elevatorMusic; // Return the audio object for possible control (pause, etc.)
}

// Function to enable scrolling and play the music
function enableScrollAndPlayMusic() {
    // Enable scrolling
    document.body.style.overflow = "auto"; // Allow scrolling
    
    // Play random elevator music
    let elevatorMusic = playRandomElevatorMusic();
    
    // Store elevator music globally if you need to pause it later
    window.currentElevatorMusic = elevatorMusic;
    canClickMenu = true;
}

let isMusicPlaying = false;

document.getElementById("MusicInput").addEventListener('click', function() {
    if (isMusicPlaying) {
        // Pause the current music and reset it to the start
        window.currentElevatorMusic.pause();
        window.currentElevatorMusic.currentTime = 0;
        isMusicPlaying = false;
    } else {
        // Play random elevator music
        window.currentElevatorMusic = playRandomElevatorMusic();
        isMusicPlaying = true;
    }
});


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

// Function to remove links from a string
function removeLinks(input) {
    // Regular expression to match URLs
    const urlPattern = /https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi;
    return input.replace(urlPattern, "[Link Removed]"); // Replace the URL with "[Link Removed]"
}

let flaggedAddPostIf = false;

function addPost() {
    if (userName.value == "default@gmail" && !flaggedAddPostIf){
        alert("Please enter your actual Email if you want me to contact you later. Not forced!");
        flaggedAddPostIf = true;
        return;
    }
    else {
    console.log("The button works");
    }

    if (!userComment.value) return;

    // Set the user name from the input
    userId.name = userName.value || "default@gmail"; // If no name, set default to "Anonymouse"
    if (userId.name === "default@gmail") {
        userId.identity = false;
        userId.image = "anonymousecommenter.png";
    } else {
        userId.identity = true;
        userId.image = "commenterpng.png";
    }

    // Clean the comment message by removing links
    userId.message = removeLinks(userComment.value);
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

// Function to send email with emailjs
function sendEmail(userId) {
    const templateParams = {
        to_name: "Goatzy", // my email
        to_email: "dev@goatzy-codes.xyz",
        from_name: userId.name || "default@gmail", // name of the commenter
        message: userId.message, // the comment message
    };

    emailjs.send("service_z6as17f", "template_kiwhxjn", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        })
        .catch(function(error) {
            console.error("Email sending failed:", error);
            const sendAgain = window.prompt(
                "Email sending failed. Type 'Again' to try resending or press Cancel to stop."
            );

            if (sendAgain && sendAgain.toLowerCase() === "again") {
                sendEmail(userId); // Retry with the same userId
            }
        });
}


// Attach event listener to the publish button
publishBtn.addEventListener("click", addPost);

function SetTime() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    console.log(`Hmm, what is the bug here..?`)

    if (hours >= 6 && hours < 12) {
        let message = "🌞Good morning";
        document.getElementById("Welcome").textContent = `${message}! Tell me down below how you feel about my codes!`;
    } else if (hours >= 12 && hours < 18) {
        let message = "🕑Good afternoon";
        document.getElementById("Welcome").textContent = `${message}! Try checking out the blogs!`;
    } else {
        let message = "🌃Good evening";
        document.getElementById("Welcome").textContent = `${message}! Check out some codes I've made!`;
    }
}

function OpenAboutMe() {
    window.location.href = "aboutme.html"
}

function OpenRealCounter() {
    window.location.href = "counter.html"
}

function resetLocStorage() {
    localStorage.clear();
    window.location.reload();
}

function scrollToBlogs() {
    console.log("Hey")
    const target = document.getElementsByClassName("blog-cards")[0];
    target.scrollIntoView({ behavior: "smooth", block: "center" });
}

function makeHide() {
    const neededContainers = document.querySelectorAll(".ThirdBody"); // Select all elements with the class "ThirdBody"
    neededContainers.forEach((container) => {
        container.style.display = "none"; // Set display to none
        container.style.overflow = "hidden"; // Ensure no overflow content is visible
    });

    // Hide the "makeHideButton" and show the "makeVisibleButton"
    document.getElementById("makeHideButton").style.display = "none";
    document.getElementById("makeVisibleButton").style.display = "inline-block";
    document.getElementById("makeHideButton").style.visibility = "hidden";
    document.getElementById("makeVisibleButton").style.visibility = "visible";
}

function makeVisible() {
    const neededContainers = document.querySelectorAll(".ThirdBody"); // Select all elements with the class "ThirdBody"
    neededContainers.forEach((container) => {
        container.style.display = "block"; // Set display to block
        container.style.overflow = "visible"; // Allow content to flow normally
    });

    // Hide the "makeVisibleButton" and show the "makeHideButton"
    document.getElementById("makeVisibleButton").style.display = "none";
    document.getElementById("makeHideButton").style.display = "inline-block";
    document.getElementById("makeVisibleButton").style.visibility = "hidden";
    document.getElementById("makeHideButton").style.visibility = "visible";
}

function removeAllComments() {
    comments.innerHTML = ""; // Clear the comments container
    localStorage.removeItem("comments"); // Clear the comments from localStorage
    updateCommentCount(); // Update the comment count (zero now)
}
