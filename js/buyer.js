document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".mobile-menu-button");
  const closeButton = document.querySelector(".sidebar-close");
  const overlay = document.querySelector(".mobile-overlay");

  function openSidebar() {
    sidebar?.classList.add("is-open");
    overlay?.classList.add("is-visible");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "true");
    }
  }

  function closeSidebar() {
    sidebar?.classList.remove("is-open");
    overlay?.classList.remove("is-visible");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }
  }

  menuButton?.addEventListener("click", openSidebar);
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

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      showMessage(`${button.textContent} lot view selected.`);
    });
  });

  document.querySelector("#demand-form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const crop = document.querySelector("#crop").value;
    const quantity = document.querySelector("#quantity").value;

    if (!crop || !quantity) {
      showMessage("Please select a crop and enter the required quantity.");
      return;
    }

    event.target.reset();
    showMessage(`Demand for ${quantity} units of ${crop} has been posted.`);
  });

  document.querySelectorAll(".offer-button, .table-action").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage(`${button.textContent} flow will open next.`);
    });
  });

  document.querySelector(".order-preview-footer button")?.addEventListener("click", () => {
    showMessage("Opening order and payment tracking.");
  });
});

function showMessage(message) {
  document.querySelector(".prototype-message")?.remove();

  const messageBox = document.createElement("div");
  messageBox.className = "prototype-message";
  messageBox.textContent = message;

  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000);
}