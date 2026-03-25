console.log("🌿 Mercy's Portfolio Loaded");

// ── Navbar shadow on scroll ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ── Smooth active nav highlighting ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.color = link.getAttribute("href") === `#${entry.target.id}`
                    ? "var(--white)"
                    : "";
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Fade-in on scroll for cards ──
const fadeEls = document.querySelectorAll(
    ".project-card, .skill-item, .info-card, .contact-card"
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.05}s`;
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    fadeObserver.observe(el);
});

// Inject visible class styles
const style = document.createElement("style");
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
