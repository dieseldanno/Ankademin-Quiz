//Togglebtn that stays on the chosen theme even if page is reloaded
//Looks for the key/value saved in local storage and adapts after it

//Selectors
const toggleBtn = document.querySelector("#toggleBtn");

//State
const theme = localStorage.getItem("theme");

//On mount, something that happens when page first loads
theme && document.body.classList.add(theme);

//Handlers
handleThemeToggle = () => {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "darkmode");
    } else {
        localStorage.removeItem("theme");
    }
}
handleBtnToggle = () => {
    document.button.classList.toggle("darkmodeBtn");
}

//Events
toggleBtn.addEventListener("click", handleThemeToggle);



