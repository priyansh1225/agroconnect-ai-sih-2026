/* AgroConnect Transporter dashboard interactions */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("#mobile-sidebar");
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".sidebar-close-button");
  const overlay = document.querySelector(".sidebar-overlay");
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  function openSidebar() {
    sidebar?.classList.add("is-open");
    overlay?.removeAttribute("hidden");
    document.body.classList.add("sidebar-open");
  }

  function closeSidebar() {
    sidebar?.classList.remove("is-open");
    overlay?.setAttribute("hidden", "");
    document.body.classList.remove("sidebar-open");
  }

  /* Mobile navigation */
  menuButton?.addEventListener("click", openSidebar);
  closeButton?.addEventListener("click", closeSidebar);
  overlay?.addEventListener("click", closeSidebar);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeSidebar();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSidebar();
  });

  /* Load acceptance: prototype only */
  document.querySelectorAll(".accept-load-button").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Load Accepted";
      button.disabled = true;
      button.classList.add("accepted");
      showMessage("Load request accepted. FPO coordinator will receive your confirmation.");
    });
  });

  /* Vehicle update button */
  document.querySelectorAll(".edit-vehicle-button").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage("Vehicle details can be updated here in the full application.");
    });
  });

  /* Delivery and payment actions */
  document.querySelectorAll(".trip-action-button").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage("Trip details opened. GPS tracking will be connected in the production version.");
    });
  });

  document.querySelectorAll(".payment-action-button").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage("UPI payment status is linked to the completed delivery record.");
    });
  });

  function showMessage(message) {
    const oldMessage = document.querySelector(".dashboard-message");
    oldMessage?.remove();

    const alert = document.createElement("div");
    alert.className = "dashboard-message";
    alert.textContent = message;
    document.body.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3500);
  }
});