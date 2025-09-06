// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Lightbox for Portfolio
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (galleryImages) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      formMsg.style.color = "lightgreen";
      formMsg.textContent = "✅ Message sent successfully!";
      contactForm.reset();
    } else {
      formMsg.style.color = "red";
      formMsg.textContent = "❌ Please fill in all fields.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

const heroImg = document.querySelector(".hero-image");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
observer.observe(heroImg);