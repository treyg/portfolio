  //Nav bar repsonive JS
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });


  // Modal popup for footer
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
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

  //initiate Rellax JS
  var rellax = new Rellax('.rellax')

  // Call theme value from browsers local storage.
  // var theme = localStorage.getItem("theme");
  // // Root element of the document.
  // const _root = document.documentElement;

  // // Check if local storage has no theme value, define the initial value.
  // !theme && localStorage.setItem("theme", "dark");

  // // Update theme value.
  // theme = localStorage.getItem("theme");

  // // Apply theme value to document root element.
  // _root.setAttribute("data-theme", theme);

  // // Function for change theme.
  // // You can define this function to the a button or call this any way.
  // function changeTheme() {
  //   theme === "light" ?
  //     localStorage.setItem("theme", "dark") :
  //     localStorage.setItem("theme", "light");

  //   // Update theme value
  //   theme = localStorage.getItem("theme");

  //   // Apply theme to document root element
  //   _root.setAttribute("data-theme", theme);
  // }



  const CHANGE_THEME = () => {
    const DATA_THEME = document.getElementsByTagName('html')[0].getAttribute('data-theme');
    DATA_THEME == 'light' ?
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark') :
      document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');
    console.log('clicked');
  }

  document.getElementById('theme-toggle').addEventListener('change', CHANGE_THEME);;