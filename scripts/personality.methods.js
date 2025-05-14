const personalityGameMethods = {
  // Initialisation du jeu
  gameInit: () => {
    personalityGameMethods.displayGame();
  },

  // Affichage du jeu
  displayGame: () => {
    const gameContainer = document.getElementById("game");

    const gameTitle = document.createElement("h3");
    gameTitle.classList.add("lato-bold", "secondary-color");
    gameTitle.textContent = "Perception : Choisissez votre perspective";
    gameContainer.appendChild(gameTitle);

    // Conteneur principal
    const traitsContainer = document.createElement("div");
    traitsContainer.classList.add("game-traits-container");

    // Créer un élément pour chaque trait
    personalityGameData.forEach((traitItem, traitIndex) => {
      // Trait container
      const traitContainer = document.createElement("div");
      traitContainer.classList.add("game-trait");
      traitContainer.dataset.traitIndex = traitIndex;

      // Trait title - Mise en avant accentuée
      const traitTitle = document.createElement("h4");
      traitTitle.classList.add("lato-bold", "game-trait-title", "secondary-color");
      traitTitle.textContent = traitItem.trait;
      traitContainer.appendChild(traitTitle);

      // Options container
      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("game-options");

      // Créer les deux options
      traitItem.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("game-option");

        // Ajouter des classes spécifiques selon le type d'option
        if (option.perspective === "Positif") {
          optionElement.classList.add("game-option-positive");
        } else {
          optionElement.classList.add("game-option-consider");
        }

        optionElement.dataset.traitIndex = traitIndex;
        optionElement.dataset.optionIndex = optionIndex;

        // Option content with perspective and description
        optionElement.innerHTML = `
          <strong>${option.perspective}</strong>: ${option.description}
        `;

        // Add click event
        optionElement.addEventListener("click", (e) => {
          // Désélectionner les options du même trait
          document
            .querySelectorAll(`.game-option[data-trait-index="${traitIndex}"]`)
            .forEach((opt) => opt.classList.remove("selected"));

          // Sélectionner l'option cliquée
          optionElement.classList.add("selected");

          // Vérifier la complétion
          personalityGameMethods.checkResults();
        });

        optionsContainer.appendChild(optionElement);
      });

      traitContainer.appendChild(optionsContainer);
      traitsContainer.appendChild(traitContainer);
    });

    gameContainer.appendChild(traitsContainer);

    // Conteneur de résultats (caché au début)
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "game-results";
    resultsContainer.classList.add("game-results");
    resultsContainer.style.display = "none";

    gameContainer.appendChild(resultsContainer);
  },

  // Vérifier si tous les traits ont été évalués
  checkResults: () => {
    const selectedOptions = document.querySelectorAll(".game-option.selected");

    if (selectedOptions.length === personalityGameData.length) {
      personalityGameMethods.showResults();
    }
  },

  // Afficher les résultats
  showResults: () => {
    const resultsContainer = document.getElementById("game-results");
    if (!resultsContainer) return;

    // Effacer les résultats précédents
    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "block";

    // Titre des résultats
    const resultsTitle = document.createElement("h3");
    resultsTitle.classList.add("lato-bold", "secondary-color");
    resultsTitle.textContent = "Votre perception de mon profil";
    resultsContainer.appendChild(resultsTitle);

    // Compter les perspectives
    let positiveCount = 0;
    let considerCount = 0;

    document.querySelectorAll(".game-option.selected").forEach((option) => {
      const optionIndex = option.dataset.optionIndex;

      // Compter selon le type d'option
      if (option.classList.contains("game-option-positive")) {
        positiveCount++;
      } else {
        considerCount++;
      }
    });

    // Créer le compteur visuel
    const counterContainer = document.createElement("div");
    counterContainer.classList.add("game-results-counter");

    // Compteur positif
    const positiveCounter = document.createElement("div");
    positiveCounter.classList.add("counter-positive");
    positiveCounter.innerHTML = `
      <span class="counter-number">${positiveCount}</span>
      <span class="counter-label">Points forts</span>
    `;

    // Compteur négatif
    const considerCounter = document.createElement("div");
    considerCounter.classList.add("counter-consider");
    considerCounter.innerHTML = `
      <span class="counter-number">${considerCount}</span>
      <span class="counter-label">Points à considérer</span>
    `;

    // Ajouter les compteurs au conteneur
    counterContainer.appendChild(positiveCounter);
    counterContainer.appendChild(considerCounter);
    resultsContainer.appendChild(counterContainer);

    // Message de conclusion simple
    const conclusion = document.createElement("p");
    conclusion.classList.add("lato-light", "game-conclusion");

    if (positiveCount > considerCount) {
      conclusion.textContent = "Vous avez une vision plutôt positive de mon profil. Merci pour votre intérêt!";
    } else if (positiveCount < considerCount) {
      conclusion.textContent = "Vous avez noté plusieurs points de vigilance. J'apprécie votre franchise!";
    } else {
      conclusion.textContent = "Vous avez une vision équilibrée de mon profil. J'apprécie cette perspective nuancée!";
    }

    resultsContainer.appendChild(conclusion);

    // Bouton pour recommencer
    const resetButton = document.createElement("button");
    resetButton.textContent = "Recommencer";
    resetButton.classList.add("game-button");
    resetButton.addEventListener("click", personalityGameMethods.resetGame);

    resultsContainer.appendChild(resetButton);
  },

  // Réinitialiser le jeu
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
