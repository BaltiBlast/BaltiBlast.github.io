const app = {
  init: () => {
    skillsMethods.skillsInit();
    experiencesMethods.experiencesInit();
    contactsMethods.contactsInit();
    aboutMethods.aboutInit();
  },
};

document.addEventListener("DOMContentLoaded", app.init());
