const body = document.querySelector("body");

const colorThemeBtn = document.getElementById("colorThemeBtn");
const favoriteBtn = document.getElementById("favourites-click-btn");
const favouritesDiv = document.querySelector(".favourites");

const moodText = document.getElementById("mode_btn_text");

colorThemeBtn.addEventListener("click", () => {
  body.classList.contains("dark")
    ? body.classList.toggle("light-mode")
    : body.classList.toggle("dark-mode");
});

colorThemeBtn.addEventListener("click", () => {
  body.classList.contains("dark")
    ? (moodText.innerHTML = "Light Mode")
    : (moodText.innerHTML = "Dark Mode");
});

favoriteBtn.addEventListener("click", () => {
  favouritesDiv.classList.toggle("show");
  if (favouritesDiv.classList.contains("show")) {
    favouritesDiv.scrollIntoView({ behavior: "smooth" });
  }
});
