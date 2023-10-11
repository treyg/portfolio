document.addEventListener('DOMContentLoaded', () => {

   // Navbar responsive JS
   const mainNav = document.getElementById('js-menu');
   const navBarToggle = document.getElementById('js-navbar-toggle');
   navBarToggle.addEventListener('click', () => mainNav.classList.toggle('active'));
 
   // Initiate Rellax JS
   const rellax = new Rellax('.rellax');
 
   // Theme management
   const fullHTML = document.documentElement;
 
   // Set default theme
   fullHTML.dataset.theme = "dark";
 
   // Check local storage for theme value and set it
   const setThemeFromLocalStorage = () => {
     const theme = localStorage.getItem("theme") || "dark";
     fullHTML.dataset.theme = theme;
   }
 
   setThemeFromLocalStorage();
 
   // Toggle theme and save to local storage
   const toggleTheme = () => {
     fullHTML.dataset.theme = fullHTML.dataset.theme === 'dark' ? 'light' : 'dark';
     localStorage.setItem("theme", fullHTML.dataset.theme);
   }
 
   document.getElementById('theme-toggle').addEventListener('change', toggleTheme);
 
   // Modal popup for footer
   const modal = document.getElementById("myModal");
   const btn = document.getElementById("myBtn");
   const closeModal = document.querySelector('.close');
 
   btn.addEventListener('click', () => modal.style.display = "block");
   closeModal.addEventListener('click', () => modal.style.display = "none");
 
   window.addEventListener('click', event => {
     if (event.target === modal) modal.style.display = "none";
   });
 
 });
 
 