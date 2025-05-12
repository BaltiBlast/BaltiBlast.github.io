const skillsMethods = {
  skillsInit: () => {
    displaySkills();
  },

  displaySkills: () => {
    const skillsSection = document.getElementById("skills-section");

    skillsData.forEach((skill) => {
      // Main container for each category
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("skills__category");

      // Category title
      const skillsTitle = document.createElement("h3");
      skillsTitle.classList.add("uppercase", "lato-bold", "secondary-color");
      skillsTitle.innerText = skill.title;

      // Skills container
      const skillsContainer = document.createElement("div");
      skillsContainer.classList.add("skills__list");

      // Skills list
      skill.listSkillsCategory.forEach((skillItem, index) => {
        // Display each skill in a span
        const skillSpan = document.createElement("span");
        skillSpan.classList.add("skill-item", "lato-light");
        skillSpan.innerText = skillItem;

        // Add a comma between skills
        if (index < skill.listSkillsCategory.length - 1) {
          skillSpan.innerText += ", ";
        }

        skillsContainer.appendChild(skillSpan);
      });

      // Add title and skills container to the category container
      categoryContainer.appendChild(skillsTitle);
      categoryContainer.appendChild(skillsContainer);

      // Add categoryu container to the main section
      skillsSection.appendChild(categoryContainer);
    });
  },
};

const { displaySkills } = skillsMethods;
