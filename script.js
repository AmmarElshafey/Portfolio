 // Mobile Menu Toggle
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      });

      // Close menu when clicking on a link
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuToggle.querySelector("i").classList.add("fa-bars");
          menuToggle.querySelector("i").classList.remove("fa-times");
        });
      });

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Scroll reveal animation
      const revealElements = document.querySelectorAll(".reveal");

      const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const revealPoint = 150;

          if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
          }
        });
      };

      window.addEventListener("scroll", revealOnScroll);
      revealOnScroll(); // Initial check

      // Scroll to top button
      const scrollTopBtn = document.getElementById("scrollTop");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          scrollTopBtn.classList.add("visible");
        } else {
          scrollTopBtn.classList.remove("visible");
        }
      });

      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Contact form handling
      const contactForm = document.getElementById("contactForm");

      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // You can integrate with EmailJS or another email service here
        console.log("Form submitted:", data);

        // Show success message (you can customize this)
        alert(
          "Thank you for your message! I'll get back to you within 24 hours.",
        );

        // Reset form
        contactForm.reset();
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        });
      });