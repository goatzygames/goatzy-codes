(function() {
    emailjs.init("FtmW5ZwKqlEeX2qwN"); // Your public key
})();

const likeButton3 = document.getElementById("likeButton");
const likeIcon3 = document.getElementById("likeIcon");
const likeText3 = document.getElementById("likeText");
const blogTitle3 = document.getElementById("Title").textContent;

// Check Local Storage for Like State
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("liked3") === "true") {
        setLikedState3();
    }
});

// Handle Like Button Click
likeButton3.addEventListener("click", () => {
    if (localStorage.getItem("liked3") === "true") return; // Prevent multiple likes

    // Update UI and Save State
    setLikedState3();

    // Save to Local Storage
    localStorage.setItem("liked3", "true");

    // Send Email Notification
    sendLikeEmail(blogTitle3);
});

// Function to Update UI
function setLikedState3() {
    likeIcon3.style.color = "blue"; // Make the like icon blue
    likeText3.textContent = "Liked!"; // Change button text
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
