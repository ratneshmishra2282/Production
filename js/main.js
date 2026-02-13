/* ===============================
   STATVION INFOTECH - MAIN JS
================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     MOBILE HAMBURGER TOGGLE
  ================================= */

  const hamburger = document.querySelector(".hamburger");
  const mainMenu = document.querySelector(".main-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      mainMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }


  /* ===============================
     MOBILE SUBMENU TOGGLE
     (Services & Sectors)
  ================================= */

  const dropdownParents = document.querySelectorAll(".dropdown > a");

  dropdownParents.forEach(parent => {

    parent.addEventListener("click", function (e) {

      if (window.innerWidth <= 992) {
        e.preventDefault();

        const parentLi = this.parentElement;

        parentLi.classList.toggle("submenu-open");
      }
    });

  });


  /* ===============================
     CLOSE MENU ON OUTSIDE CLICK
  ================================= */

  document.addEventListener("click", function (event) {

    if (!event.target.closest("header")) {

      if (mainMenu) {
        mainMenu.classList.remove("active");
      }

      document.querySelectorAll(".submenu-open").forEach(item => {
        item.classList.remove("submenu-open");
      });
    }

  });


  /* ===============================
     SMOOTH SCROLL FOR ANCHORS
  ================================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth"
          });

          // Close mobile menu after click
          if (mainMenu) {
            mainMenu.classList.remove("active");
          }
        }
      }

    });
  });


  /* ===============================
     WINDOW RESIZE SAFETY RESET
  ================================= */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 992) {

      if (mainMenu) {
        mainMenu.classList.remove("active");
      }

      document.querySelectorAll(".submenu-open").forEach(item => {
        item.classList.remove("submenu-open");
      });
    }

  });

});
