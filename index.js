const body = document.querySelector("body");

const colorThemeBtn = document.getElementById("colorThemeBtn");
const favoriteBtn = document.getElementById("favourites-click-btn");
const favouritesDiv = document.querySelector(".favourites");

const modeText = document.getElementById("mode_btn_text");
const heartColor = document.getElementById("heart-icon-btn");
const modeColor = document.getElementById("mode-icon-btn");

colorThemeBtn.addEventListener("click", () => {
  body.classList.contains("dark")
    ? body.classList.toggle("light-mode")
    : body.classList.toggle("dark-mode");
});

colorThemeBtn.addEventListener("click", () => {
  if (modeText.innerText === "Dark Mode") {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

favoriteBtn.addEventListener("click", () => {
  favouritesDiv.classList.toggle("show");
});

favoriteBtn.addEventListener('click', function() {
  heartColor.classList.toggle('clicked');
});

colorThemeBtn.addEventListener('click', function() {
  modeColor.classList.toggle('clicked');
});
