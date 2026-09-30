
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


// TEMPLE CONTAINER

const templeContainer = document.querySelector(".grid-temple");


// CREATE TEMPLE CARDS

function createTempleCard(templeList) {

if (!templeContainer) {
return;
}

// Remove old cards before displaying new ones
templeContainer.replaceChildren();

templeList.forEach((temple) => {

const card = document.createElement("section");
const name = document.createElement("h2");
const location = document.createElement("p");
const dedication = document.createElement("p");
const area = document.createElement("p");
const img = document.createElement("img");

// Temple name
name.textContent = temple.templeName;

// Temple information
location.innerHTML =
`<span class="label">Location:</span> ${temple.location}`;

dedication.innerHTML =
`<span class="label">Dedicated:</span> ${temple.dedicated}`;

area.innerHTML =
`<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

// Temple image
img.setAttribute("src", temple.imageUrl);

img.setAttribute(
"alt",
`${temple.templeName} Temple`
);

// Native lazy loading
img.setAttribute("loading", "lazy");

img.setAttribute("width", "400");
img.setAttribute("height", "250");

// Add elements to card
card.appendChild(name);
card.appendChild(location);
card.appendChild(dedication);
card.appendChild(area);
card.appendChild(img);

// Add card to page
templeContainer.appendChild(card);
});
}

// DISPLAY ALL TEMPLES WHEN PAGE LOADS

createTempleCard(temples);

// NAVIGATION FILTER BUTTONS

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


// HOME
// Display all temples

if (homeLink) {
homeLink.addEventListener("click", (event) => {
event.preventDefault();

createTempleCard(temples);

closeMobileMenu();
});
}


// OLD
// Temples built before 1900


if (oldLink) {
oldLink.addEventListener("click", (event) => {
event.preventDefault();

const oldTemples = temples.filter((temple) => {
const year = parseInt(temple.dedicated.split(",")[0]);

return year < 1900;
});

createTempleCard(oldTemples);

closeMobileMenu();
});
}

// NEW
// Temples built after 2000


if (newLink) {
newLink.addEventListener("click", (event) => {
event.preventDefault();

const newTemples = temples.filter((temple) => {
const year = parseInt(temple.dedicated.split(",")[0]);

return year > 2000;
});

createTempleCard(newTemples);

closeMobileMenu();
});
}



// LARGE
// Temples larger than 90,000 sq ft

if (largeLink) {
largeLink.addEventListener("click", (event) => {
event.preventDefault();

const largeTemples = temples.filter((temple) => {
return temple.area > 90000;
});

createTempleCard(largeTemples);

closeMobileMenu();
});
}

// SMALL
// Temples smaller than 10,000 sq ft

if (smallLink) {
smallLink.addEventListener("click", (event) => {
event.preventDefault();

const smallTemples = temples.filter((temple) => {
return temple.area < 10000;
});

createTempleCard(smallTemples);

closeMobileMenu();
});
}


// CLOSE MOBILE MENU

function closeMobileMenu() {

if (navbarToggle && navbarMenu) {
navbarToggle.classList.remove("active");
navbarMenu.classList.remove("active");
}
}



// let figures = document.querySelector(".grid-temple");
// figures.replaceChildren();
// console.log(figures);

// function createTempleCard(){
//     temples.forEach(temple => {
//         let card = document.createElement("section");   
//         let name = document.createElement("h3");   
//         let location = document.createElement("p");   
//         let dedication = document.createElement("p");   
//         let area = document.createElement("p");   
//         let img = document.createElement("img");
        
//         name.textContent = temple.templeName;
//         location.innerHTML = ` <span class="label">Location:</span> ${temple.location}`;
//         dedication.innerHTML = ` <span class="label">Dedicated:</span> ${temple.dedicated}`;
//         area.innerHTML = ` <span class="label">Size:</span> ${temple.area} sq ft`;
//         img.setAttribute("src", temple.imageUrl);
//         img.setAttribute("alt", `${temple.templeName} Temple`);
//         img.setAttribute("loading", "lazy");

//         card.appendChild(name);
//         card.appendChild(location);
//         card.appendChild(dedication);
//         card.appendChild(area);
//         card.appendChild(img);

//         document.querySelector(".grid-temple").appendChild(card);
//     })

// };

// createTempleCard()


