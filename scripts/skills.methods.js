const skillsMethods = {
  skillsInit: () => {
    displaySkills();
  },

  // ------------------------------------------------------------------------------------------------- //
  // Display skills in the skills section ✅
  displaySkills: () => {
    const skillsSection = document.getElementById("skills-section");

    skillsData.forEach((skill) => {
      // Main container for each category
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("skills__category");

      // Category title
      const skillsTitle = createCategoryTitle(skill);

      // Skills container
      const skillsContainer = createSkillsList(skill);

      // Add title and skills container to the category container
      categoryContainer.append(skillsTitle, skillsContainer);

      // Add categoryu container to the main section
      skillsSection.appendChild(categoryContainer);
    });
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create category title ✅
  createCategoryTitle: (skill) => {
    const skillsTitle = document.createElement("h3");
    skillsTitle.classList.add("uppercase", "lato-bold", "secondary-color");
    skillsTitle.innerText = skill.title;
    return skillsTitle;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create skills list ✅
  createSkillsList: (skill) => {
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
    return skillsContainer;
  },
};

const { displaySkills, createCategoryTitle, createSkillsList } = skillsMethods;
