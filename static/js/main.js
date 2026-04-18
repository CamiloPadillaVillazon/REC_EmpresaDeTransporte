document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("mainNavbar");
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    // Updates navbar style based on vertical scroll.
    const updateNavbarOnScroll = () => {
        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    updateNavbarOnScroll();
    window.addEventListener("scroll", updateNavbarOnScroll);

    // Reveals sections smoothly when they enter the viewport.
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));

    // Adds smooth scroll behavior for internal anchor links.
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const targetId = anchor.getAttribute("href");
            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});
