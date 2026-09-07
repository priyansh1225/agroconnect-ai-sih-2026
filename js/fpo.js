document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".mobile-menu-button");
  const closeButton = document.querySelector(".sidebar-close-button");
  const overlay = document.querySelector(".sidebar-overlay");
  const mobileBreakpoint = 900;

  function isMobile() {
    return window.innerWidth <= mobileBreakpoint;
  }

  function openSidebar() {
    if (!isMobile()) return;

    sidebar?.classList.add("is-open");
    body.classList.add("sidebar-open");

    if (overlay) {
      overlay.hidden = false;
      overlay.classList.add("is-visible");
    }

    menuButton?.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar?.classList.remove("is-open");
    body.classList.remove("sidebar-open");

    if (overlay) {
      overlay.classList.remove("is-visible");

      setTimeout(() => {
        if (!overlay.classList.contains("is-visible")) {
          overlay.hidden = true;
        }
      }, 250);
    }

    menuButton?.setAttribute("aria-expanded", "false");
  }

  menuButton?.addEventListener("click", () => {
    if (sidebar?.classList.contains("is-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  closeButton?.addEventListener("click", closeSidebar);
  overlay?.addEventListener("click", closeSidebar);

  document.querySelectorAll(".sidebar-nav a").forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      closeSidebar();
    }
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      showMessage(`${button.textContent} demand view selected.`);
    });
  });

  document.querySelectorAll(".table-action").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage(`${button.textContent} workflow will open next.`);
    });
  });

  document.querySelector(".publish-button")?.addEventListener("click", (event) => {
    event.target.textContent = "Bulk lot published";
    event.target.disabled = true;

    showMessage("The 42-quintal cotton bulk lot is now visible to matching buyers.");
  });

  document.querySelectorAll(".respond-button").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage("Buyer response form will open next.");
    });
  });

  document.querySelector(".payment-card-footer button")?.addEventListener("click", () => {
    showMessage("Farmer-wise payment distribution will open next.");
  });

  document.querySelector(".secondary-button")?.addEventListener("click", () => {
    showMessage("Transport and backhaul board will open next.");
  });

  document.querySelector(".language-button")?.addEventListener("click", () => {
    showMessage("Language options will open here.");
  });

  document.querySelector(".notification-button")?.addEventListener("click", () => {
    showMessage("FPO notifications will open here.");
  });

  document.querySelector(".profile-button")?.addEventListener("click", () => {
    showMessage("FPO profile options will open here.");
  });

  document.querySelector(".text-button")?.addEventListener("click", () => {
    showMessage("FPO support options will open here.");
  });
});

function showMessage(message) {
  document.querySelector(".prototype-message")?.remove();

  const messageBox = document.createElement("div");
  messageBox.className = "prototype-message";
  messageBox.setAttribute("role", "status");
  messageBox.textContent = message;

  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000);
}