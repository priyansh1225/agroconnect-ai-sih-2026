document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".mobile-menu-button");

  if (sidebar && menuButton) {
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      showMessage(`${button.textContent} price view selected.`);
    });
  });

  const calculatorButton = document.querySelector("#open-calculator");

  if (calculatorButton) {
    calculatorButton.addEventListener("click", () => {
      showMessage("Net-realization calculator will open here.");
    });
  }

  const joinPoolButton = document.querySelector(".small-button");

  if (joinPoolButton) {
    joinPoolButton.addEventListener("click", () => {
      joinPoolButton.textContent = "Request sent";
      joinPoolButton.disabled = true;

      showMessage("Your FPO bulk-lot request has been recorded.");
    });
  }

  document.querySelectorAll(".table-action").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage(`${button.textContent} flow will open next.`);
    });
  });

  document.querySelectorAll(".transaction-preview-footer button").forEach((button) => {
    button.addEventListener("click", () => {
      showMessage("Opening secure buyer offer review.");
    });
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