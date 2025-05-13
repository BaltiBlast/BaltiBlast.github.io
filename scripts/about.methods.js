const aboutMethods = {
  aboutInit: () => {
    updateAge();
  },

  // ------------------------------------------------------------------------------------------------- //
  // Age calculation function ✅
  calculateAge: (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    // Check if the birthday has already occurred
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Update the age in the HTML element ✅
  updateAge: () => {
    // Date of birth in YYYY-MM-DD format
    const birthDate = "1993-02-17";

    // Calculate the current age
    const currentAge = calculateAge(birthDate);

    // Update the HTML element with the current age
    const ageElement = document.getElementById("dynamic-age");
    if (ageElement) {
      ageElement.textContent = currentAge;
    }
  },
};

const { calculateAge, updateAge } = aboutMethods;
