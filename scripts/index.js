const app = {
  init: () => {
    skillsMethods.skillsInit();
    experiencesMethods.experiencesInit();
    contactsMethods.contactsInit();
  },
};

document.addEventListener("DOMContentLoaded", app.init());
