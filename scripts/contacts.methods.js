const contactsMethods = {
  contactsInit: () => {
    displayContacts();
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create technologies list of the experience ✅
  displayContacts: () => {
    const contactsContainer = document.getElementById("contacts-section");

    contactsData.forEach((contact) => {
      const contactItem = document.createElement("div");
      contactItem.classList.add("contacts__category");

      const contactType = contactTypeTitle(contact);

      let contactValue;
      if (contact.isLink) {
        contactValue = linkContact(contact);
      } else {
        contactValue = standardContact(contact);
      }

      contactItem.append(contactType, contactValue);
      contactsContainer.appendChild(contactItem);
    });
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create contact type ✅
  contactTypeTitle: (contact) => {
    const contactType = document.createElement("span");
    contactType.classList.add("secondary-color", "lato-bold-italic", "contacts__description");
    contactType.textContent = `${contact.type}: `;
    return contactType;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create contact without link ✅
  standardContact: (contact) => {
    contactValue = document.createElement("span");
    contactValue.classList.add("lato-light", "contacts__list");
    contactValue.textContent = contact.value;
    return contactValue;
  },

  // ------------------------------------------------------------------------------------------------- //
  // Create contact with link ✅
  linkContact: (contact) => {
    contactValue = document.createElement("a");
    contactValue.classList.add("lato-light", "contacts__list", "contacts__link");
    contactValue.textContent = contact.value;
    contactValue.href = contact.value;
    contactValue.target = "_blank";
    return contactValue;
  },
};

const { displayContacts, standardContact, linkContact, contactTypeTitle } = contactsMethods;
