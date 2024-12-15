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

function CopyCode() {
    const code = `<!DOCTYPE html>
<html>
<head>
<title>Goatzy Random Number</title>
<link rel="stylesheet" href="style.css">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Goatzy's Codes</title>
<link rel="icon" type="image/x-icon" href="images/blueglossygoat.png">

<meta property="og:title" content="Goatzy's Random Numbers">

<meta property="og:description" content="Goatzy's random number generator lives here!">

<meta property="og:url" content="https://goatzy-codes.xyz">

<meta property="og:image" content="https://i.ibb.co/YBjLSt7/blueglossygoat.png">

<meta property="og:type" content="website">

<meta property="og:site_name" content="Goatzy's Random Number">
</head>
<body>

    <div class="TopHeader">
        <h2 style="left: 5vh" id="MenuButton" onclick="DebugMenu()">☰</h2>
        <br>
        <span id="GoatzyCodesText">Goatzy Codes</span>
    
        <a href="index.html" id="OpenHome"><span>Home</span></a>
    </div>
    
    
    <div class="TheMenu">
        <h2>The Menu</h2>
        <hr id="CheckMenu">
        <div style="box-shadow: 1vh 1vh 2vh; border-radius: 2vh;">
            <label for="MusicInput">Music On/Off</label>
            <input id="MusicInput" type="checkbox">
        </div>
        <hr>
    
    </div>

<style>
    #Display {
        transform: scale(1); /* Initial scale */
        transition: transform 0.3s ease-in-out; /* Smooth transition for transform */
    }

    #Display:hover {
        animation: MakeBigger 2.3s infinite both ease-in-out;
    }

    @keyframes MakeBigger {
    0% {
        transform: scale(1) scaleY(1);
        font-weight: 400;
        background-color: rgb(255, 255, 255);
        transform: scaleY(1);
    }
    50% {
        transform: scale(1.2) scaleY(1.2);
        font-weight: 650;
        background-color: rgb(232, 240, 255);
    }
    100% {
        transform: scale(1) scaleY(1);
        font-weight: 400;
        background-color: white;
    }
}

.CopyCode {
    box-shadow: 2vh 2vh 3vh;
    margin: 10vh;
    background-color: white;
    border-radius: 2vh;
    padding: 5vh;
}

</style>

<br><br><br><br><br><br>

<div class="MainContainer" style="text-align: center; box-shadow: 1.5vh 1.5vh 3vh black; background-color: white; padding: 2.5vh; border-radius: 2vh;margin: auto; width: 80%;">
    <h1>Generate a random number!</h1>
    <br>
    <h2 style="font-weight: 500;">Generates a random number through -100 to 100. Uses JavaScript to do it.</h2>
    <button style="width: 65%; font-size: x-large;" onclick="generateRandomNum()">Generate</button>
    <br><br>
    <div class="ResultContainer" style="display: flex; flex-direction: row; padding-left: 9vh; text-align: center;">
        <h1 style="font-weight: 400; box-shadow: 1vh 1vh 2vh; border-radius: 3vh; padding: 1vh; width: 50%; text-align: center; margin: auto;" id="Display">1</h1>
        <button onclick="copyRandomNum()">Copy</button>
    </div>
</div>

<br><br><br><br>

<div class="CopyCode">
    <h1>Copy the code</h1>
    <h3 id="DisplayCode">Copies the entire code to your clipboard.</h3>
    <button style="margin-left: 50vh;" onclick="CopyCode()" id="copyButton">Copy code</button>
</div>

<script>
    function generateRandomNum() {
        let randomNum
        
        randomNum = Math.floor(Math.random() * 100)

        document.getElementById("Display").innerHTML = randomNum
    }

    function copyRandomNum() {
        let randomNumText = document.getElementById("Display").textContent
        
        navigator.clipboard.writeText(randomNumText)
    }
</script>
   
<script src="randomnumbergen.js"></script>
</body>
</html>`

navigator.clipboard.writeText(code)
alert(`Code copied successfully!

    ${code}`
)
}
