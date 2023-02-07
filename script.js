var box  = document.getElementById('nav_bar');


function myFunction() {
    if (window.scrollY >= 20) {
      box.style.background = "rgba(128, 0, 128)";
    } else {
      box.style.background = "rgba(3, 3, 3, 0)";
    }
  }