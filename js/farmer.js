/* =========================================================
   AGROCONNECT AI — FARMER DASHBOARD
   Mobile Navigation + Dashboard Interactions

   IMPORTANT:
   This file handles behaviour only.
   Visual styling stays inside common.css / farmer.css.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE SIDEBAR
     ======================================================= */

  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".mobile-menu-button");
  const closeButton = document.querySelector(".sidebar-close-button");
  const navLinks = document.querySelectorAll(".sidebar-nav a");


  /* -------------------------------------------------------
     Create a mobile overlay.

     Why?
     When the sidebar opens, the user should be able to
     tap outside it to close it.

     This is much easier to understand on mobile than
     forcing the user to find another menu button.
     ------------------------------------------------------- */

  let sidebarOverlay = document.querySelector(".sidebar-overlay");

  if (!sidebarOverlay) {

    sidebarOverlay = document.createElement("div");

    sidebarOverlay.className = "sidebar-overlay";

    document.body.appendChild(sidebarOverlay);
  }


  /* =======================================================
     OPEN SIDEBAR
     ======================================================= */

  function openSidebar() {

    if (!sidebar) {
      return;
    }

    sidebar.classList.add("is-open");

    sidebarOverlay.classList.add("is-visible");

    if (menuButton) {

      menuButton.setAttribute(
        "aria-expanded",
        "true"
      );

      menuButton.setAttribute(
        "aria-label",
        "Close navigation"
      );

    }

    /*
      Prevent the background page from moving while
      the mobile sidebar is open.
    */
    document.body.classList.add("sidebar-open");
  }


  /* =======================================================
     CLOSE SIDEBAR
     ======================================================= */

  function closeSidebar() {

    if (!sidebar) {
      return;
    }

    sidebar.classList.remove("is-open");

    sidebarOverlay.classList.remove("is-visible");

    if (menuButton) {

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

    /*
      Give scrolling back to the page.
    */
    document.body.classList.remove("sidebar-open");
  }


  /* =======================================================
     OPEN BUTTON
     ======================================================= */

  if (menuButton) {

    menuButton.addEventListener(
      "click",
      openSidebar
    );

  }


  /* =======================================================
     CLOSE BUTTON
     ======================================================= */

  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeSidebar
    );

  }


  /* =======================================================
     CLICK OUTSIDE SIDEBAR
     ======================================================= */

  sidebarOverlay.addEventListener(
    "click",
    closeSidebar
  );


  /* =======================================================
     CLOSE WHEN A NAVIGATION LINK IS SELECTED
     ======================================================= */

  navLinks.forEach((link) => {

    link.addEventListener(
      "click",
      closeSidebar
    );

  });


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        closeSidebar();

      }

    }
  );


  /* =======================================================
     RESPONSIVE SAFETY
     
     If the browser is resized from mobile to desktop,
     remove the mobile-open state.
     ======================================================= */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 900) {

        closeSidebar();

      }

    }
  );


  /* =======================================================
     MARKET PRICE FILTERS
     ======================================================= */

  document
    .querySelectorAll(".filter-button")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".filter-button")
            .forEach((item) => {

              item.classList.remove("active");

            });

          button.classList.add("active");

          showMessage(
            `${button.textContent.trim()} price view selected.`
          );

        }
      );

    });


  /* =======================================================
     NET REALIZATION CALCULATOR
     ======================================================= */

  document
    .querySelector("#open-calculator")
    ?.addEventListener(
      "click",
      () => {

        showMessage(
          "Net-realization calculator will open here."
        );

      }
    );


  /* =======================================================
     FPO JOIN BUTTON
     ======================================================= */

  document
    .querySelector(".small-button")
    ?.addEventListener(
      "click",
      (event) => {

        event.target.textContent = "Request sent";

        event.target.disabled = true;

        showMessage(
          "Your FPO aggregation request has been recorded."
        );

      }
    );


  /* =======================================================
     TABLE ACTIONS
     ======================================================= */

  document
    .querySelectorAll(".table-action")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          showMessage(
            `${button.textContent.trim()} flow will open next.`
          );

        }
      );

    });

});


/* =========================================================
   SIMPLE PROTOTYPE MESSAGE
   ========================================================= */

function showMessage(message) {

  document
    .querySelector(".prototype-message")
    ?.remove();


  const messageBox =
    document.createElement("div");


  messageBox.className =
    "prototype-message";


  messageBox.textContent =
    message;


  document.body.appendChild(
    messageBox
  );


  setTimeout(
    () => messageBox.remove(),
    3000
  );

}