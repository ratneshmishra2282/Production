document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     PAGE LOADER WITH PERCENTAGE
  ================================ */
  const loader = document.getElementById("loader");
  const percentText = document.getElementById("loadPercent");

  if (loader && percentText) {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 4;
      percentText.textContent = percent + "%";
      if (percent >= 100) {
        clearInterval(timer);
        loader.style.display = "none";
      }
    }, 40);
  }

  /* ===============================
     HAMBURGER MENU
  ================================ */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {

    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("show");
    });

    // Close menu when clicking link
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("show") &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navMenu.classList.remove("show");
      }
    });
  }

});
