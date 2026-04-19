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

    // Number counter animation triggered on scroll
    const counters = document.querySelectorAll(".counter");
    if (counters.length > 0) {
        const statsSection = document.querySelector(".stats-banner");
        
        const runCounter = (counter) => {
            const target = +counter.getAttribute("data-target");
            const speed = 250; // The lower the number, the faster the count
            const increment = target / speed;
            let current = 0;
            
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start animation when section comes into view
                    counters.forEach(counter => runCounter(counter));
                } else {
                    // Reset to 0 when section is out of view
                    counters.forEach(counter => {
                        counter.innerText = "0";
                    });
                }
            });
        }, { threshold: 0.3 }); // Triggers when 30% of section is visible

        if (statsSection) {
            counterObserver.observe(statsSection);
        }
    }

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
