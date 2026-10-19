
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       CURRENT YEAR
    ===================================== */

    const currentYear = document.querySelector("#currentyear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("show");

            const icon = menuButton.querySelector("i");

            if (navigation.classList.contains("show")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }

        });

    }

    /* =====================================
       CLOSE MOBILE MENU
    ===================================== */

    document.querySelectorAll(".navigation a")
        .forEach(link => {

            link.addEventListener("click", () => {

                if (navigation) {
                    navigation.classList.remove("show");
                }

                if (menuButton) {

                    const icon =
                        menuButton.querySelector("i");

                    if (icon) {
                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");
                    }
                }

            });

        });

    /* =====================================
       RESERVE BUTTON
    ===================================== */

    const reserveBtn =
        document.querySelector("#reserveBtn");

    const contactSection =
        document.querySelector("#contact");

    if (reserveBtn && contactSection) {

        reserveBtn.addEventListener("click", () => {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

    /* =====================================
       VISIT COUNTER
    ===================================== */

    let visits =
        Number(localStorage.getItem("visitCounter")) || 0;

    visits++;

    localStorage.setItem(
        "visitCounter",
        visits
    );

    const visitCounter =
        document.querySelector("#visit-counter");

    if (visitCounter) {

        visitCounter.textContent =
            `Website Visits: ${visits}`;

    }

    /* =====================================
       BOOKING FORM
    ===================================== */

    const bookingForm =
        document.querySelector("#bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", event => {

            event.preventDefault();

            const travelerName =
                document.querySelector("#name")?.value;

            alert(
                `Thank you ${travelerName}! Your reservation request has been successfully submitted.`
            );

            bookingForm.reset();

        });

    }

    /* =====================================
       DESTINATION SELECT
    ===================================== */

    const destinationSelect =
        document.querySelector(
            "#bookingForm select"
        );

    const bookingButton =
        document.querySelector(
            "#bookingForm button"
        );

    if (destinationSelect && bookingButton) {

        destinationSelect.addEventListener("change", () => {

            const destination =
                destinationSelect.options[
                    destinationSelect.selectedIndex
                ].text;

            bookingButton.textContent =
                `Reserve ${destination}`;

        });

    }

    /* =====================================
       NEWSLETTER
    ===================================== */

    const newsletterButton =
        document.querySelector(".newsletter button");

    if (newsletterButton) {

        newsletterButton.addEventListener("click", () => {

            const emailInput =
                document.querySelector(
                    ".newsletter input[type='email']"
                );

            if (
                !emailInput ||
                emailInput.value.trim() === ""
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }

            alert(
                "Thank you for subscribing to Explore DRCongo!"
            );

            emailInput.value = "";

        });

    }

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    document.querySelectorAll("section")
        .forEach(section => {

            section.classList.add("hidden");

            observer.observe(section);

        });

    /* =====================================
       BACK TO TOP BUTTON
    ===================================== */

    const backTopButton =
        document.createElement("button");

    backTopButton.classList.add("back-top");

    backTopButton.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(backTopButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backTopButton.classList.add("show");

        } else {

            backTopButton.classList.remove("show");

        }

    });

    backTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /* =====================================
       CARD EFFECTS
    ===================================== */

    document.querySelectorAll(".card")
        .forEach(card => {

            card.addEventListener("mouseenter", () => {

                card.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,.20)";

            });

            card.addEventListener("mouseleave", () => {

                card.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,.10)";

            });

        });

    /* =====================================
       RANDOM TRAVEL QUOTE
    ===================================== */

    const quotes = [
        "Adventure awaits in every corner of the Congo.",
        "Travel far enough to discover yourself.",
        "Explore nature, discover culture, create memories.",
        "Every destination tells a story.",
        "The Democratic Republic of the Congo is full of wonders."
    ];

    const randomQuote =
        quotes[
            Math.floor(
                Math.random() * quotes.length
            )
        ];

    console.log(randomQuote);

    /* =====================================
       ACTIVE PAGE
    ===================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    document.querySelectorAll(".navigation a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (href === currentPage) {

                link.classList.add("active");

            }

        });

});