// selectors
const toggleBtn = document.querySelector("#toggleBtn");

// state
const theme = localStorage.getItem("theme");

// on mount, something that happens when page first loads
theme && document.body.classList.add(theme);

// handlers
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

// events
toggleBtn.addEventListener("click", handleThemeToggle);



