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

<meta property="og:site_name" content="Goatzy's Codes">
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

        body {
            background-color: rgb(150, 150, 150)55, 255, 255;
            font-family: "Oswald";
        }

        h1 {
            color: rgb(34, 93, 255);
        }

        form {
            background-color: white;
            text-align: center;
            width: max-content;
            margin-top: 20vh;
            padding: 5vh;
            border-radius: 10px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.515);
            height: max-content;
        }

        #textbox {
            width: 50%;
            text-align: center;
            font-size: 2em;
            border: 2px solid rgba(0, 0, 0, 0.785);
            border-radius: 4px;
            margin-bottom: 15px;
        }

        label {
            font-size: 1.5em;
            font-weight: bold;
        }

        button {
            margin-top: 15px;
            background-color: rgb(0, 128, 255);
            font-size: 1.5em;
            border: none;
            padding: 10px;
            border-radius: 10px;
            color: white;
            cursor: pointer;
        }

        button:hover {
            background-color: blue;
        }

        #result {
            font-size: 1.75em;
            font-weight: bold;
        }

        .CopyCode {
    box-shadow: 2vh 2vh 3vh;
    margin: 10vh;
    background-color: white;
    border-radius: 2vh; /* Ensures it doesn't exceed 90% of the viewport width */
    width: auto;     /* Makes the width flexible */
    overflow: hidden; /* Prevents any overflow from happening */
    box-sizing: border-box; /* Ensures padding and borders are included in the width/height calculation */
}

@media (max-width: 768px) { /* For tablets or smaller screens */
    .CopyCode {
        margin: 5vh;  /* Reduces margin on smaller screens */
        padding: 3vh; /* Reduces padding on smaller screens */
    }
}

@media (max-width: 480px) { /* For mobile screens */
    .CopyCode {
        margin: 3vh;  /* Further reduces margin for mobile */
        padding: 2vh; /* Further reduces padding for mobile */
        box-shadow: 1vh 1vh 2vh; /* Smaller box shadow */
        max-width: 100%; /* Makes sure the container uses the full available width */
    }
}
    </style>

    <form>
        <h1>Temperature conversion:</h1>
        <input type="number" id="textbox" value="0"><br>

        <input type="radio" id="toFahrenheit" name="unit">
        <label for="toFahrenheit">Celsius ➡ Fahrenheit</label><br>

        <input type="radio" id="toCelsius" name="unit">
        <label for="toCelsius">Fahrenheit ➡ Celsius</label>
<br>
        <button type="button" onclick="convert()">Submit</button>
        <p id="result"></p>
    </form>

    <br><br><br><br><br><br><br><br><br><br><br><br><br>

    <div class="CopyCode">
        <h1>Copy the code</h1>
        <h3 id="DisplayCode">Copies the entire code to your clipboard.</h3>
        <button onclick="CopyCode()" id="copyButton">Copy code</button>
    </div>

    <script>
        const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°" + " F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°" + " C"
    }
    else{
        result.textContent = "Select an unit"
    }
}
    </script>

    <script src="index.js"></script>
</body>
</html>`

navigator.clipboard.writeText(code)
alert(`Code copied to clipboard successfully!
    
    ${code}
    `)

}