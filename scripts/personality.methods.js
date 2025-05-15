const personalityGameMethods = {
  // Initialisation du jeu
  gameInit: () => {
    personalityGameMethods.displayGame();
  },
  // ------------------------------------------------------------------------------------------------- //
  // Display the game ✅
  displayGame: () => {
    // Get the game container
    const gameContainer = document.getElementById("game");

    // Create de traits container
    const traitsContainer = createTrait();
    gameContainer.appendChild(traitsContainer);

    // Create the results container ( hide by default )
    const resultsContainer = createResultsContainer();
    gameContainer.appendChild(resultsContainer);
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create Trait ✅
  createTrait: () => {
    const gameContainer = document.getElementById("game");
    gameContainer.classList.add("game-traits-container");

    // Create traits
    personalityGameData.forEach((traitItem, traitIndex) => {
      // Trait container
      const traitContainer = document.createElement("div");
      traitContainer.classList.add("game-trait");
      traitContainer.dataset.traitIndex = traitIndex;

      // Trait title
      const traitTitle = createTraitTitle(traitItem);
      traitContainer.appendChild(traitTitle);

      // Options container
      const optionsContainer = createTraitOptions(traitItem, traitIndex);

      traitContainer.appendChild(optionsContainer);
      gameContainer.appendChild(traitContainer);
    });

    return gameContainer;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create trait title ✅
  createTraitTitle: (traitItem) => {
    const traitTitle = document.createElement("h4");
    traitTitle.classList.add("lato-bold", "game-trait-title", "secondary-color");
    traitTitle.textContent = traitItem.trait;
    return traitTitle;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create options ✅
  createTraitOptions: (traitItem, traitIndex) => {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("game-options");

    traitItem.options.forEach((option, optionIndex) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("game-option");

      // Add class based on perspective
      if (option.perspective === "Positif") {
        optionElement.classList.add("game-option-positive");
      } else {
        optionElement.classList.add("game-option-consider");
      }

      optionElement.dataset.traitIndex = traitIndex;
      optionElement.dataset.optionIndex = optionIndex;

      // Create the perspective element
      const perspectiveElement = document.createElement("span");
      perspectiveElement.classList.add("lato-bold");
      perspectiveElement.textContent = option.perspective;

      // Add a separator
      const separatorText = document.createTextNode(": ");

      // Create the description element
      const descriptionElement = document.createElement("span");
      descriptionElement.classList.add("lato-light-italic");
      descriptionElement.textContent = option.description;

      // Append elements to the option element
      optionElement.appendChild(perspectiveElement);
      optionElement.appendChild(separatorText);
      optionElement.appendChild(descriptionElement);

      // Add click event
      optionElement.addEventListener("click", (e) => {
        // Unfocus all other options
        document
          .querySelectorAll(`.game-option[data-trait-index="${traitIndex}"]`)
          .forEach((opt) => opt.classList.remove("selected"));

        // Focus the clicked option
        optionElement.classList.add("selected");

        // Check if all traits are selected
        personalityGameMethods.checkResults();
      });

      optionsContainer.appendChild(optionElement);
    });

    return optionsContainer;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Check if all traits are selected ✅
  checkResults: () => {
    const selectedOptions = document.querySelectorAll(".game-option.selected");
    if (selectedOptions.length === personalityGameData.length) {
      showResults();
    }
  },

  // ------------------------------------------------------------------------------------------------- //
  // Display the results div ✅
  showResults: () => {
    const resultsContainer = document.getElementById("game-results");
    if (!resultsContainer) return;

    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "block";

    // Results title
    const resultsTitle = document.createElement("h3");
    resultsTitle.classList.add("lato-bold", "secondary-color");
    resultsTitle.textContent = "Votre perception de mon profil";
    resultsContainer.appendChild(resultsTitle);

    // Perspectives counter
    let positiveCount = 0;
    let considerCount = 0;

    // Count the selected options
    document.querySelectorAll(".game-option.selected").forEach((option) => {
      if (option.classList.contains("game-option-positive")) {
        positiveCount++;
      } else {
        considerCount++;
      }
    });

    // Create the counters
    const counterContainer = document.createElement("div");
    counterContainer.classList.add("game-results-counter");

    // Counters data
    const countersData = [
      {
        type: "positive",
        count: positiveCount,
        label: "Points forts",
      },
      {
        type: "consider",
        count: considerCount,
        label: "Points à considérer",
      },
    ];

    // Create the counters
    countersData.forEach((counterData) => {
      const counter = document.createElement("div");
      counter.classList.add(`counter-${counterData.type}`);

      const numberElement = document.createElement("span");
      numberElement.classList.add("counter-number");
      numberElement.textContent = counterData.count;

      const labelElement = document.createElement("span");
      labelElement.classList.add("counter-label", "lato-light");
      labelElement.textContent = counterData.label;

      counter.append(numberElement, labelElement);
      counterContainer.appendChild(counter);
    });

    resultsContainer.appendChild(counterContainer);

    // Results message
    const conclusion = resultMessage(positiveCount, considerCount);
    resultsContainer.appendChild(conclusion);

    // Reset button
    const resetButton = document.createElement("button");
    resetButton.textContent = "Recommencer";
    resetButton.classList.add("game-button");
    resetButton.addEventListener("click", personalityGameMethods.resetGame);

    resultsContainer.appendChild(resetButton);
  },

  // ------------------------------------------------------------------------------------------------- //
  // Result message ✅
  resultMessage: (positiveCount, considerCount) => {
    const messageConclusion = document.createElement("p");
    messageConclusion.classList.add("lato-light", "game-conclusion");
    if (positiveCount > considerCount) {
      messageConclusion.textContent = "Vous avez une vision plutôt positive de mon profil. Merci pour votre intérêt!";
    } else if (positiveCount < considerCount) {
      messageConclusion.textContent = "Vous avez noté plusieurs points de vigilance. J'apprécie votre franchise!";
    } else {
      messageConclusion.textContent =
        "Vous avez une vision équilibrée de mon profil. J'apprécie cette perspective nuancée!";
    }
    return messageConclusion;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Game reset ✅
  resetGame: () => {
    document.querySelectorAll(".game-option").forEach((option) => {
      option.classList.remove("selected");
    });

    const resultsContainer = document.getElementById("game-results");
    if (resultsContainer) {
      resultsContainer.style.display = "none";
    }
  },
};

const { createTrait, createTraitOptions, createTraitTitle, showResults, resultMessage, gameContainer } =
  personalityGameMethods;
