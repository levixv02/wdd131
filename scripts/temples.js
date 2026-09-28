
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();


const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const navbarToggle = document.querySelector(".nav-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});
``