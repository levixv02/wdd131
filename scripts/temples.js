/* Display current year */
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

/* Display last modified date */
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

/* Menu elements */
const navbarToggle = document.querySelector(".navbarToggle");
const navbarMenu = document.querySelector(".navbar-menu");
const paragraph = document.querySelector("header p");

/* Toggle navigation menu */
navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    paragraph.classList.toggle("active");

});
