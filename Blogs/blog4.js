(function() {
    emailjs.init("FtmW5ZwKqlEeX2qwN"); // Your public key
})();

const likeButton4 = document.getElementById("likeButton");
const likeIcon4 = document.getElementById("likeIcon");
const likeText4 = document.getElementById("likeText");
const blogTitle4 = document.getElementById("Title").textContent;

// Check Local Storage for Like State
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("liked4") === "true") {
        setLikedState4();
    }
});

// Handle Like Button Click
likeButton4.addEventListener("click", () => {
    if (localStorage.getItem("liked4") === "true") return; // Prevent multiple likes

    // Update UI and Save State
    setLikedState4();

    // Save to Local Storage
    localStorage.setItem("liked4", "true");

    // Send Email Notification
    sendLikeEmail(blogTitle4);
});

// Function to Update UI
function setLikedState4() {
    likeIcon4.style.color = "blue"; // Make the like icon blue
    likeText4.textContent = "Liked!"; // Change button text
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
