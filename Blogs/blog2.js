(function() {
    emailjs.init("FtmW5ZwKqlEeX2qwN"); // Your public key
})();

const likeButton2 = document.getElementById("likeButton");
const likeIcon2 = document.getElementById("likeIcon");
const likeText2 = document.getElementById("likeText");
const blogTitle2 = document.getElementById("Title").textContent;

// Check Local Storage for Like State
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("liked2") === "true") {
        setLikedState2();
    }
});

// Handle Like Button Click
likeButton2.addEventListener("click", () => {
    if (localStorage.getItem("liked2") === "true") return; // Prevent multiple likes

    // Update UI and Save State
    setLikedState2();

    // Save to Local Storage
    localStorage.setItem("liked2", "true");

    // Send Email Notification
    sendLikeEmail(blogTitle2);
});

// Function to Update UI
function setLikedState2() {
    likeIcon2.style.color = "blue"; // Make the like icon blue
    likeText2.textContent = "Liked!"; // Change button text
}

// Function to Send Email Notification
function sendLikeEmail(title) {
    const templateParams = {
        to_name: "Goatzy",
        to_email: "dev@goatzy-codes.xyz",
        blog_title: title,
        message: `Someone liked your blog: ${title}`,
    };

    emailjs.send("service_br1k1rg", "template_oc0tsrv", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.error("Email sending failed:", error);
        });
}
