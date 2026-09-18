// =========================
// MENU MOBILE
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


// =========================
// FAQ
// =========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        // Cierra los demás
        document.querySelectorAll(".faq-item").forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        // Abre/cierra el seleccionado
        item.classList.toggle("active");

    });

});


// =========================
// CERRAR MENU AL HACER CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


// =========================
// ANIMACIÓN AL APARECER
// =========================

const elements = document.querySelectorAll(
    ".service-card, .step, .about-text, .certificate-text"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});