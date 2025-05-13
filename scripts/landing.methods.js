const landingMethods = {
  landingInit: () => {
    setupEasterEgg();
  },

  // ------------------------------------------------------------------------------------------------- //
  // Set up easter egg ✅
  setupEasterEgg: () => {
    const arrowDown = document.getElementById("arrow-down");
    const easterEggContainer = document.getElementById("landing-easter-egg");

    // Click event on the arrow down
    if (arrowDown && easterEggContainer) {
      arrowDown.addEventListener("click", function (e) {
        e.preventDefault();
        // Trigger the easter egg avec le préfixe de l'objet
        showEasterEgg();
      });
    }
  },

  // ------------------------------------------------------------------------------------------------- //
  // Show easter egg message ✅
  showEasterEgg: () => {
    const easterEggContainer = document.getElementById("landing-easter-egg");

    if (easterEggContainer) {
      // Clear the container before adding the message
      easterEggContainer.innerHTML = "";

      // Create and display the message
      const easterEggMessage = document.createElement("p");
      easterEggMessage.textContent = "Perdu ! Il faut scroller 👀...";
      easterEggMessage.classList.add("warning-color");

      // Append the message to the container
      easterEggContainer.appendChild(easterEggMessage);

      // Set the opacity to 1 to show the message
      easterEggContainer.style.opacity = "1";

      // Hide the message after 3 seconds
      setTimeout(() => {
        easterEggContainer.style.opacity = "0";
      }, 3000);
    }
  },
};

const { landingInit, setupEasterEgg, showEasterEgg } = landingMethods;
