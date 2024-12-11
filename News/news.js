// API Key for NY Times
let apiKey = "EzaTt4KDAPFH6AN5TpfWJXXjYE2phx7R";
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
  "health",
  "insider",
  "magazine",
  "movies",
  "opinion",
  "politics",
  "sports",
  "technology",
  "travel",
  "us",
  "world"
];

// Request URL for NY Times API (use a relevant endpoint)
let requestURL;

// Function to generate cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
      <img src="${item.multimedia && item.multimedia[0] ? item.multimedia[0].url : './newspaper.jpg'}" alt="Image not available at the moment..." />
    </div>
    <div class="news-content">
      <div class="news-title">${item.title}</div>
      <div class="news-description">${item.abstract || item.lead_paragraph || ""}</div>
      <a href="${item.url}" target="_blank" class="view-button">Read More</a>
    </div>`;
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

// Create the audio object for the elevator music
var ElevatorMusic = new Audio("/Sounds/elevatormusic.mp3");

// Function to enable scrolling and play the music
function enableScrollAndPlayMusic() {
    // Enable scrolling
    document.body.style.overflow = "auto"; // Allow scrolling
    
    // Play the elevator music
    ElevatorMusic.loop = true; // Loop the music
    ElevatorMusic.play(); // Play the music
    canClickMenu = true;
}

let isMusicPlaying = false;

document.getElementById("MusicInput").addEventListener('click', function() {
    if (isMusicPlaying) {
        ElevatorMusic.pause();
        ElevatorMusic.currentTime = 0;
        isMusicPlaying = false;
    } else {
        ElevatorMusic.play()
        isMusicPlaying = true;
    }
});