const app = {
  init: () => {
    skillsMethods.skillsInit();
    experiencesMethods.experiencesInit();
  },
};

document.addEventListener("DOMContentLoaded", app.init());
