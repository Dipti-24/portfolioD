// Smooth scroll for nav links
const links = document.querySelectorAll('.nav-links a');
for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close hamburger menu on mobile after clicking a link
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
}

// Highlight active link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const id = section.getAttribute('id');
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Animated typing for name
const nameElement = document.getElementById("animated-name");
if (nameElement) {
  const fullName = "Dipti Mishra";
  let index = 0;
  nameElement.textContent = "";

  function typeEffect() {
    if (index < fullName.length) {
      nameElement.textContent += fullName.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    } else {
      nameElement.classList.remove('typing');
    }
  }

  nameElement.classList.add('typing');
  typeEffect();
}

// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});
