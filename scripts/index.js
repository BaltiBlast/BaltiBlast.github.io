const app = {
  init: () => {
    landingMethods.landingInit();
    skillsMethods.skillsInit();
    experiencesMethods.experiencesInit();
    aboutMethods.aboutInit();
    contactsMethods.contactsInit();
  },
};

document.addEventListener("DOMContentLoaded", app.init());
