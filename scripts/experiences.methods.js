const experiencesMethods = {
  experiencesInit: () => {
    displayExperiences();
  },

  // ------------------------------------------------------------------------------------------------- //
  // Display experiences
  displayExperiences: () => {
    const experiencesSection = document.getElementById("experiences-section");

    experiencesData.forEach((exp) => {
      // Create the title of the experience ✅
      const title = experiencesMethods.experiencesTitle(exp);

      // Create the description of the experience ✅
      const description = experiencesMethods.experiencesDescription(exp);

      // Create skills list of the experience ✅
      const skillsContainer = experiencesMethods.experiencesSkills(exp);

      // Create technologies list of the experience ✅
      const techContainer = experiencesMethods.experiencesTechnologies(exp);

      // Create experience container ✅
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("experiences__category");

      // Ajout des éléments au conteneur de contenu
      contentContainer.append(description, skillsContainer, techContainer);

      // Create global container for the experience ✅
      const experienceContainer = document.createElement("div");
      experienceContainer.classList.add("experience-container");

      // Add title and content container to the global container ✅
      experienceContainer.append(title, contentContainer);

      // Add global container to the section experiences ✅
      experiencesSection.appendChild(experienceContainer);
    });
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create the title of the experience ✅
  experiencesTitle: (exp) => {
    // right side title ✅
    const title = document.createElement("h3");
    title.classList.add("lato-light");

    // left side title ✅
    const periodSpan = document.createElement("span");
    periodSpan.classList.add("secondary-color", "lato-bold");
    periodSpan.textContent = exp.period;

    // title separator ✅
    const separator = document.createElement("span");
    separator.classList.add("secondary-color");
    separator.textContent = " | ";

    // Description experience ✅
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("secondary-color", "lato-regular");
    titleSpan.textContent = exp.title;

    // Full title ✅
    title.append(periodSpan, separator, titleSpan);

    return title;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create description of the experience ✅
  experiencesDescription: (exp) => {
    const description = document.createElement("p");
    description.classList.add("experiences__description", "lato-light");
    description.textContent = exp.description;

    return description;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create skills list of the experience ✅
  experiencesSkills: (exp) => {
    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("experiences__list");

    if (exp.skills.length > 0) {
      const skillsLabel = document.createElement("span");
      skillsLabel.classList.add("lato-bold-italic");
      skillsLabel.textContent = "Compétences : ";

      const skillsList = document.createElement("span");
      skillsList.classList.add("lato-light");
      skillsList.textContent = exp.skills.join(", ");

      skillsContainer.appendChild(skillsLabel);
      skillsContainer.appendChild(skillsList);
    }

    return skillsContainer;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create technologies list of the experience ✅
  experiencesTechnologies: (exp) => {
    const techContainer = document.createElement("div");
    techContainer.classList.add("experiences__list");

    if (exp.technologies.length > 0) {
      const techLabel = document.createElement("span");
      techLabel.classList.add("lato-bold-italic");
      techLabel.textContent = "Technologies : ";

      const techList = document.createElement("span");
      techList.classList.add("lato-light");
      techList.textContent = exp.technologies.join(", ");

      techContainer.appendChild(techLabel);
      techContainer.appendChild(techList);
    }

    return techContainer;
  },
};

const { displayExperiences, experiencesTitle, experiencesDescription, experiencesSkills, experiencesTechnologies } =
  experiencesMethods;
