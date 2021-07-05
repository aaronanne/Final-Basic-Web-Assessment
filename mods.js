const mods = document.querySelector(".mods");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleMods() {
    mods.classList.toggle("show-mods");
}

function windowOnClick(event) {
    if (event.target === mods) {
        toggleMods();
    }
}

trigger.addEventListener("click", toggleMods);
closeButton.addEventListener("click", toggleMods);
window.addEventListener("click", windowOnClick);