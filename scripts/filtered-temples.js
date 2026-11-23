// Footer

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;


// Navigation Menu

const navbarToggle = document.querySelector(".navbarToggle");
const navbarMenu = document.querySelector(".navbar-menu");
// const paragraph = document.querySelector("header p");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    // paragraph.classList.toggle("active")
});

//temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Kishasa DR.Congo",
    location: "Kishasa DR.Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
  },
    
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  },

  {
    templeName: "Lisbon Portugal",
    location: "Lisbon Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  },
];


// DOM Elements

const templeContainer = document.querySelector(".grid-temple");
const pageTitle = document.querySelector("#page-title");


// Build Temple Cards

function displayTemples(templeList){

    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p>
                <span class="label">Location:</span>
                ${temple.location}
            </p>

            <p>
                <span class="label">Dedicated:</span>
                ${temple.dedicated}
            </p>

            <p>
                <span class="label">Area:</span>
                ${temple.area.toLocaleString()} sq ft
            </p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName} Temple"
                loading="lazy"
                width="400"
                height="250">
        `;

        templeContainer.appendChild(card);

    });
}


// Display All Temples Initially

displayTemples(temples);


// Home

document.querySelector("#home")
.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Home";

    displayTemples(temples);

    closeMenu();

});


// Old Temples

document.querySelector("#old")
.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated);
        return year < 1900;
    });

    displayTemples(oldTemples);

    closeMenu();

});


// New Temples

document.querySelector("#new")
.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated);
        return year > 2000;
    });

    displayTemples(newTemples);

    closeMenu();

});


// Large Temples

document.querySelector("#large")
.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);

    closeMenu();

});


// Small Temples

document.querySelector("#small")
.addEventListener("click", (event) => {

    event.preventDefault();

    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
    closeMenu();

});


// Mobile Menu

function closeMenu() {
    navbarMenu.classList.remove("active");
    navbarToggle.classList.remove("active");
}