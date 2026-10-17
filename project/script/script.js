// CURRENT YEAR

document.addEventListener("DOMContentLoaded", () => {

    const yearElement = document.querySelector("#currentyear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

// MOBILE MENU
// 
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

        const icon = menuButton.querySelector("i");

        if (navigation.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


// Reserve Boutton
const reserveBtn = document.querySelector("#reserveBtn");

reserveBtn.addEventListener("click", () => {

    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });

});

// CLOSE MENU AFTER CLICK

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("show");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// VISIT COUNTER

let visits = Number(localStorage.getItem("visitCounter")) || 0;

visits++;

localStorage.setItem("visitCounter", visits);

const visitCounter = document.querySelector("#visit-counter");

if (visitCounter) {
    visitCounter.textContent =
        `Website Visits: ${visits}`;
}

// BOOKING FORM

const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.querySelector("#name").value;

        alert(
            `Thank you ${name}! Your reservation request has been received.`
        );

        bookingForm.reset();

    });

}

// NEWSLETTER

const newsletterButton =
    document.querySelector(".newsletter button");

if (newsletterButton) {

    newsletterButton.addEventListener("click", () => {

        const email =
            document.querySelector(".newsletter input[type='email']");

        if (email.value.trim() === "") {

            alert("Please enter your email address.")
            return;
        }

        alert(
            "Thank you for subscribing to Explore DRCongo!"
        );

        email.value = "";

    });

}

// DESTINATION SELECT

const destinationSelect =
    document.querySelector("select");

const reserveButton =
    document.querySelector("#bookingForm button");

if (destinationSelect) {

    destinationSelect.addEventListener("change", () => {

        reserveButton.textContent =
            `Reserve ${destinationSelect.options[destinationSelect.selectedIndex].text}`;

    });

}

// SCROLL ANIMATIONS

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.2
    }

);

const sections =
    document.querySelectorAll("section");

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// BACK TO TOP BUTTON

const backTopButton =
    document.createElement("button");

backTopButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

backTopButton.classList.add("back-top");

document.body.appendChild(backTopButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTopButton.style.display = "block";

    } else {

        backTopButton.style.display = "none";

    }

});

backTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// DESTINATION CARDS HOVER MESSAGE

const destinationCards =
    document.querySelectorAll(".card");

destinationCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
            "0 5px 15px rgba(0,0,0,.1)";

    });

});

// RANDOM TRAVEL QUOTE

const quotes = [

    "Adventure awaits in every corner of the Congo.",

    "Travel far enough to discover yourself.",

    "Explore nature, discover culture, create memories.",

    "Every destination tells a story.",

    "The Democratic Republic of the Congo is full of wonders."

];

const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

console.log(randomQuote);

