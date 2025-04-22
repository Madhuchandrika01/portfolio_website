const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

// Dark Mode Toggle Functionality
const toggleTheme = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Apply the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Add event listeners to both toggle buttons
  const toggleButtonDesktop = document.getElementById("theme-toggle-desktop");
  const toggleButtonHamburger = document.getElementById("theme-toggle-hamburger");

  toggleButtonDesktop.addEventListener("click", toggleTheme);
  toggleButtonHamburger.addEventListener("click", toggleTheme);
});