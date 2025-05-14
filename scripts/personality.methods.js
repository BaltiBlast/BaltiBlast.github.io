const personalityGameMethods = {
  gameInit: () => {
    displayGame();
  },

  displayGame: () => {
    const gameContainer = document.getElementById("game");

    // Créer un élément pour chaque trait
    personalityGameData.forEach((traitItem, traitIndex) => {
      // Créer le conteneur principal du trait
      const traitContainer = document.createElement("div");
      traitContainer.classList.add("personality__trait__container");
      traitContainer.dataset.traitIndex = traitIndex;

      // Créer et ajouter le titre du trait
      const traitTitle = createTraitTitle(traitItem);
      traitContainer.appendChild(traitTitle);

      // Créer le conteneur des options
      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("personality__options__container");

      // Créer chaque option
      traitItem.options.forEach((option, optionIndex) => {
        const optionElement = createOption(optionIndex, traitIndex);

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

  // ------------------------------------------------------------------------------------------------- //
  // Create trait title ✅
  createTraitTitle: (trait) => {
    const traitTitle = document.createElement("h3");
    traitTitle.classList.add("uppercase", "secondary-color", "lato-bold");
    traitTitle.textContent = trait.trait;
    return traitTitle;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create personality option ✅
  createOption: (optionIndex, traitIndex) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("personality__option");
    optionElement.dataset.traitIndex = traitIndex;
    optionElement.dataset.optionIndex = optionIndex;
    return optionElement;
  },
};

const { displayGame, createTraitTitle, createOption } = personalityGameMethods;
