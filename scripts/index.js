const app = {
  init: () => {
    landingMethods.landingInit();
    skillsMethods.skillsInit();
    experiencesMethods.experiencesInit();
    aboutMethods.aboutInit();
    contactsMethods.contactsInit();
    personalityGameMethods.gameInit();
  },
};

document.addEventListener("DOMContentLoaded", app.init());
