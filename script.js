

const api = new API();

const form = document.querySelector('form');
const contactName = document.querySelector('#contactName');
const contactPhone = document.querySelector('#contactPhone');
const contactList = document.querySelector('#contactList');

function contactItemList({ contactName, contactPhone }, index) {
  const el = document.createElement('li');
  const bold = document.createElement('strong');
  const emphasis = document.createElement('i');

  bold.innerText = contactName;
  emphasis.innerHTML = " " + contactPhone + " ";

  el.appendChild(bold);
  el.appendChild(emphasis);
  el.appendChild(buttonRemoveContact(index));
  return el;
}

function showContactList() {
  contactList.innerHTML = "";
  api.readContacts().forEach((contact, index) => {
    const contactItem = contactItemList(contact, index);
    contactList.appendChild(contactItem);
  });
}

function saveContact(contact) {
  api.createContact(contact)
  showContactList();
}

function buttonRemoveContact(contactId) {
  const eraseButton = document.createElement('button');
  eraseButton.innerText = " X ";

  eraseButton.addEventListener('click', () => eraseContact(contactId))
  return eraseButton;
}

function eraseContact(contactId) {
  api.deleteContact(contactId)
  showContactList()
}

function clearField(field) {
  field.value = "";
}

window.onload = () => {
  showContactList(api.contacts);
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const contact = {
      contactName: contactName.value,
      contactPhone: contactPhone.value
    };

    saveContact(contact);
    clearField(contactName);
    clearField(contactPhone);
  });
};
