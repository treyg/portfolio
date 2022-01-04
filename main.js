  //Nav bar repsonive JS
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });

  //initiate Rellax JS
  var rellax = new Rellax('.rellax')


  //Code to change theme
  const fullHTML = document.getElementsByTagName('html')[0]
  //Set default theme
  fullHTML.setAttribute("data-theme", "dark");

  //Check locol storage for theme value
  const checkLocalStorage = () => {
    const theme = localStorage.getItem("theme");
    theme === "light" ?
      fullHTML.setAttribute("data-theme", "light") :
      fullHTML.setAttribute("data-theme", "dark");
  }

  window.addEventListener('load', checkLocalStorage);

  //Function to change theme
  const changeTheme = () => {
    const dataTheme = fullHTML.getAttribute('data-theme');
    dataTheme == 'dark' ?
      fullHTML.setAttribute('data-theme', 'light') :
      fullHTML.setAttribute('data-theme', 'dark');

    saveToLocalStorage();
  }

  //check if theme is dark or light and save to local storage
  const saveToLocalStorage = () => {
    const dataTheme = fullHTML.getAttribute('data-theme');
    dataTheme == 'dark' ?
      localStorage.setItem("theme", "dark") :
      localStorage.setItem("theme", "light");
  }

  //Change theme on custom toggle change
  document.getElementById('theme-toggle').addEventListener('change', changeTheme);


  // Modal popup for footer
  // Get the modal
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  document.querySelector('.close').addEventListener('click', () => modal.style.display = "none")
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }