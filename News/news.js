import { apiKey } from './api-key.js';
const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const options = [
  "home",
  "arts",
  "automobiles",
  "books/review",
  "business",
  "fashion",
  "food",
  "insider",
  "magazine",
  "movies",
  "opinion",
  "sports",
  "technology",
  "travel",
  "us",
  "world"
];

let requestURL;

const generateUI = (articles) => {
    for (let item of articles) {
      let card = document.createElement("div");
      card.classList.add("news-card");
      card.innerHTML = `
        <div class="news-image-container">
          <img src="${item.multimedia && item.multimedia[0] ? item.multimedia[0].url : './newspaper.jpg'}" alt="Image not available at the moment..." />
        </div>
        <div class="news-content">
          <div class="news-title">${item.title}</div>
          <div class="news-description">${item.abstract || item.lead_paragraph || ""}</div>
          <button id="readMoreNews" onclick="window.open('${item.url}', '_blank')">Read More</button>
        </div>
      `;
      container.appendChild(card);
    }
  };
  

// Function to fetch and display news from NY Times API
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.results); // Adjusting to handle NY Times API response
};

// Function to select a category (not needed for NY Times API as it doesn't support categories like NewsAPI)
const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;
  e.target.classList.add("active");
  getNews();
};

// Create buttons for categories (if needed)
const createOptions = () => {
  // Categories are static; you may want to use only general or omit the category feature
  optionsContainer.innerHTML = "";
  options.forEach(i => {
    optionsContainer.innerHTML += `<button class="option" onclick="selectCategory(event,'${i}')">${i}</button>`;
  });
};

// Initialize the page with default content
const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};

window.onload = () => {
  // Default category could be 'home' or 'general'
  requestURL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
  init();
};


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