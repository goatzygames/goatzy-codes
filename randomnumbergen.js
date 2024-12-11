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

    // Create the audio object
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
