/* =========================================================
   AGROCONNECT AI — FARMER DASHBOARD
   Farmer Dashboard JavaScript

   Handles:
   1. Mobile sidebar
   2. Sidebar overlay
   3. Sidebar close button
   4. Escape key
   5. Navigation link closing
   6. Sticky-header scroll state
   7. Dashboard prototype interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const body = document.body;

  const sidebar = document.querySelector(".sidebar");

  const menuButton = document.querySelector(".mobile-menu-button");

  const closeButton = document.querySelector(".sidebar-close-button");

  const overlay = document.querySelector(".sidebar-overlay");

  const navLinks = document.querySelectorAll(".sidebar-nav a");

  const topbar = document.querySelector(".topbar");


  /* =======================================================
     SETTINGS
     ======================================================= */

  /*
     This value must match the mobile breakpoint
     used in your CSS.
  */
  const MOBILE_BREAKPOINT = 900;


  /* =======================================================
     CHECK MOBILE VIEW
     ======================================================= */

  function isMobileView() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }


  /* =======================================================
     UPDATE HAMBURGER BUTTON
     ======================================================= */

  function updateMenuButton(isOpen) {

    if (!menuButton) {
      return;
    }

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation"
        : "Open navigation"
    );
  }


  /* =======================================================
     SHOW OVERLAY
     ======================================================= */

  function showOverlay() {

    if (!overlay) {
      return;
    }

    overlay.hidden = false;

    overlay.classList.add("is-visible");

    overlay.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  /* =======================================================
     HIDE OVERLAY
     ======================================================= */

  function hideOverlay() {

    if (!overlay) {
      return;
    }

    overlay.classList.remove("is-visible");

    overlay.setAttribute(
      "aria-hidden",
      "true"
    );

    /*
      Wait for CSS transition before hiding it.
      This prevents the closing animation from being
      cut off immediately.
    */
    setTimeout(function () {

      if (!overlay.classList.contains("is-visible")) {
        overlay.hidden = true;
      }

    }, 250);
  }


  /* =======================================================
     OPEN MOBILE SIDEBAR
     ======================================================= */

  function openSidebar() {

    /*
      Do not open the mobile drawer on desktop.
    */
    if (!sidebar || !isMobileView()) {
      return;
    }

    sidebar.classList.add("is-open");

    showOverlay();

    updateMenuButton(true);

    /*
      Prevent the page behind the sidebar from scrolling.
    */
    body.classList.add("sidebar-open");

    /*
      Move keyboard focus to the close button.
    */
    if (closeButton) {
      closeButton.focus();
    }
  }


  /* =======================================================
     CLOSE MOBILE SIDEBAR
     ======================================================= */

  function closeSidebar() {

    if (!sidebar) {
      return;
    }

    sidebar.classList.remove("is-open");

    hideOverlay();

    updateMenuButton(false);

    /*
      Allow the page to scroll again.
    */
    body.classList.remove("sidebar-open");
  }


  /* =======================================================
     TOGGLE SIDEBAR
     ======================================================= */

  function toggleSidebar() {

    if (!sidebar || !isMobileView()) {
      return;
    }

    if (sidebar.classList.contains("is-open")) {

      closeSidebar();

    } else {

      openSidebar();

    }
  }


  /* =======================================================
     HAMBURGER BUTTON
     ======================================================= */

  if (menuButton) {

    menuButton.addEventListener(
      "click",
      toggleSidebar
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
     OVERLAY CLICK
     ======================================================= */

  if (overlay) {

    overlay.addEventListener(
      "click",
      closeSidebar
    );

  }


  /* =======================================================
     SIDEBAR NAVIGATION
     ======================================================= */

  navLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        /*
          Close drawer after selecting a section
          on mobile.
        */
        if (isMobileView()) {

          closeSidebar();

        }

      }
    );

  });


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        sidebar &&
        sidebar.classList.contains("is-open")
      ) {

        closeSidebar();

        /*
          Return focus to hamburger.
        */
        if (menuButton) {
          menuButton.focus();
        }

      }

    }
  );


  /* =======================================================
     WINDOW RESIZE
     ======================================================= */

  window.addEventListener(
    "resize",
    function () {

      /*
        If user rotates phone or expands browser,
        make sure mobile menu does not remain stuck open.
      */
      if (
        window.innerWidth > MOBILE_BREAKPOINT &&
        sidebar &&
        sidebar.classList.contains("is-open")
      ) {

        closeSidebar();

      }

    }
  );


  /* =======================================================
     STICKY HEADER SCROLL STATE
     ======================================================= */

  /*
    CSS will make the header actually sticky.

    This JavaScript only adds/removes "is-scrolled"
    so CSS can add a shadow or visual separation.
  */

  if (topbar) {

    function updateHeader() {

      if (window.scrollY > 5) {

        topbar.classList.add("is-scrolled");

      } else {

        topbar.classList.remove("is-scrolled");

      }

    }

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      {
        passive: true
      }
    );

  }


  /* =======================================================
     MARKET PRICE FILTERS
     ======================================================= */

  const filterButtons =
    document.querySelectorAll(".filter-button");

  filterButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        /*
          Remove active state from all filters.
        */
        filterButtons.forEach(function (item) {

          item.classList.remove("active");

        });

        /*
          Activate selected filter.
        */
        button.classList.add("active");

        showMessage(
          button.textContent.trim() +
          " price view selected."
        );

      }
    );

  });


  /* =======================================================
     OPEN CALCULATOR
     ======================================================= */

  const calculatorButton =
    document.querySelector("#open-calculator");

  if (calculatorButton) {

    calculatorButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Net-realization calculator will open here."
        );

      }
    );

  }


  /* =======================================================
     FPO JOIN BUTTON
     ======================================================= */

  const joinButton =
    document.querySelector(".small-button");

  if (joinButton) {

    joinButton.addEventListener(
      "click",
      function () {

        joinButton.textContent =
          "Request sent";

        joinButton.disabled = true;

        showMessage(
          "Your FPO aggregation request has been recorded."
        );

      }
    );

  }


  /* =======================================================
     TABLE ACTIONS
     ======================================================= */

  const tableActions =
    document.querySelectorAll(".table-action");

  tableActions.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        showMessage(
          button.textContent.trim() +
          " flow will open next."
        );

      }
    );

  });


  /* =======================================================
     LOCATION BUTTON
     ======================================================= */

  const locationButton =
    document.querySelector(".location-button");

  if (locationButton) {

    locationButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Location selection will open here."
        );

      }
    );

  }


  /* =======================================================
     LANGUAGE BUTTON
     ======================================================= */

  const languageButton =
    document.querySelector(".language-button");

  if (languageButton) {

    languageButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Language options will open here."
        );

      }
    );

  }


  /* =======================================================
     NOTIFICATION BUTTON
     ======================================================= */

  const notificationButton =
    document.querySelector(".notification-button");

  if (notificationButton) {

    notificationButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Your notifications will open here."
        );

      }
    );

  }


  /* =======================================================
     PROFILE BUTTON
     ======================================================= */

  const profileButton =
    document.querySelector(".profile-button");

  if (profileButton) {

    profileButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Profile menu will open here."
        );

      }
    );

  }


  /* =======================================================
     CHANGE CROP BUTTON
     ======================================================= */

  const changeCropButton =
    document.querySelector(".button-reset");

  if (changeCropButton) {

    changeCropButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Crop selection will open here."
        );

      }
    );

  }


  /* =======================================================
     ASSISTANCE BUTTON
     ======================================================= */

  const assistanceButton =
    document.querySelector(".text-button");

  if (assistanceButton) {

    assistanceButton.addEventListener(
      "click",
      function () {

        showMessage(
          "WhatsApp, SMS and IVR access options will open here."
        );

      }
    );

  }


  /* =======================================================
     LOT ACTION BUTTON
     ======================================================= */

  const lotActionButton =
    document.querySelector(".icon-button");

  if (lotActionButton) {

    lotActionButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Lot actions will open here."
        );

      }
    );

  }


  /* =======================================================
     REVIEW OFFER BUTTON
     ======================================================= */

  const reviewOfferButton =
    document.querySelector(
      ".transaction-preview-footer button"
    );

  if (reviewOfferButton) {

    reviewOfferButton.addEventListener(
      "click",
      function () {

        showMessage(
          "Offer review will open here."
        );

      }
    );

  }


  /* =======================================================
     INITIAL MENU STATE
     ======================================================= */

  updateMenuButton(false);

});


/* =========================================================
   PROTOTYPE MESSAGE
   ========================================================= */

function showMessage(message) {

  /*
    Remove an existing message first.
  */
  const oldMessage =
    document.querySelector(".prototype-message");

  if (oldMessage) {
    oldMessage.remove();
  }


  /* -------------------------------------------------------
     CREATE MESSAGE
     ------------------------------------------------------- */

  const messageBox =
    document.createElement("div");


  /* -------------------------------------------------------
     MESSAGE SETTINGS
     ------------------------------------------------------- */

  messageBox.className =
    "prototype-message";

  messageBox.setAttribute(
    "role",
    "status"
  );

  messageBox.setAttribute(
    "aria-live",
    "polite"
  );

  messageBox.textContent =
    message;


  /* -------------------------------------------------------
     ADD TO PAGE
     ------------------------------------------------------- */

  document.body.appendChild(
    messageBox
  );


  /* -------------------------------------------------------
     REMOVE AFTER 3 SECONDS
     ------------------------------------------------------- */

  window.setTimeout(
    function () {

      if (messageBox) {
        messageBox.remove();
      }

    },
    3000
  );

}