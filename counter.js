function CopyCode() {
    const code = `<!DOCTYPE html>
<html>
<head>
<title>Goatzy Codes</title>
<link rel="stylesheet" href="style.css">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Goatzy's Codes</title>
<link rel="icon" type="image/x-icon" href="images/blueglossygoat.png">
<link rel="stylesheet" href="style.css"> 

<meta property="og:title" content="Goatzy's Codes">

<meta property="og:description" content="Goatzy is making learning projects here...">

<meta property="og:url" content="https://goatzy-codes.xyz">

<meta property="og:image" content="https://i.ibb.co/YBjLSt7/blueglossygoat.png">

<meta property="og:type" content="website">

<!-- Optional: Specify the site name -->
<meta property="og:site_name" content="Goatzy's Codes">
</head>
<body>

    <div class="TopHeader">
        <h2 style="left: 5vh" id="MenuButton" onclick="DebugMenu()">☰</h2>
        <br>
        <span id="GoatzyCodesText">Goatzy Codes</span>
    
        <a onclick="openHome()" id="OpenHome"><span>Home</span></a>
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

    <br><br><br><br>

    <p id="Counter"></p>
    <div class="SecondContainer" style="text-align: center;">
    <h1>Counter</h1>
    <h1 id="SetNumber">0</h1>
    <button id="DecreaseButton">Decrease</button>
    <button id="ResetButton">Reset</button>
    <button id="IncreaseButton">Increase</button><br><br>
    <button id="RandomButton">Random</button>
    </div>

    <script>
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

function openHome() {
    window.location="index.html"
}
    </script>

    <style>
        #SetNumber {
    font-size: 50px;
    font-weight:900;
    box-shadow: 5px 5px 15px;
    border-radius: 15px;
}

.SecondContainer {
    border: 1px solid rgb(188, 188, 188);
    border-radius: 10px;
    width: 250px;
    height: 200px;
    padding: 20px;
    justify-content: center;
    text-align: center;
    background-color: rgb(252, 254, 255);
    box-shadow: 2px 5px 20px;
    padding:50px;
    height: fit-content;

}
    </style>

</html>    
</body>`
    
    
    navigator.clipboard.writeText(code)
    alert("Code copied successfully!")
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
