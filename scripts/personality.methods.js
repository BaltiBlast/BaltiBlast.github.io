const personalityGameMethods = {
  gameInit: () => {
    displayGame();
  },

  displayGame: () => {
    const gameContainer = document.getElementById("game");

    // Vérifier si le conteneur existe
    if (!gameContainer) return;

    // Nettoyer le conteneur si nécessaire
    gameContainer.innerHTML = "";

    // Créer un élément pour chaque trait
    personalityGameData.forEach((traitItem, traitIndex) => {
      // Créer le conteneur principal du trait
      const traitContainer = document.createElement("div");
      traitContainer.dataset.traitIndex = traitIndex;

      // Créer et ajouter le titre du trait
      const traitTitle = document.createElement("h3");
      traitTitle.textContent = traitItem.trait;
      traitContainer.appendChild(traitTitle);

      // Créer le conteneur des options
      const optionsContainer = document.createElement("div");

      // Créer chaque option
      traitItem.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement("div");
        optionElement.dataset.traitIndex = traitIndex;
        optionElement.dataset.optionIndex = optionIndex;

        // Label de l'option
        const optionLabel = document.createElement("span");
        optionLabel.textContent = option.perspective;

        // Description de l'option
        const optionContent = document.createElement("p");
        optionContent.textContent = option.description;

        // Assembler l'option
        optionElement.append(optionLabel, optionContent);
        optionsContainer.appendChild(optionElement);
      });

      // Ajouter les options au trait
      traitContainer.appendChild(optionsContainer);

      // Ajouter le trait complet au conteneur principal
      gameContainer.appendChild(traitContainer);
    });
  },
};

const { displayGame } = personalityGameMethods;
