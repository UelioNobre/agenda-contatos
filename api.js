class API {
  constructor() {
    this.contacts = [
      { contactName: 'Nobre', contactPhone: '85920015026' },
      { contactName: 'Frazão', contactPhone: '8888855446' },
    ]
  }

  createContact(contact) {
    this.contacts.push(contact)
  }

  readContacts() {
    return this.contacts;
  }

  deleteContact(contactID) {
    this.contacts.splice(contactID, 1);
  }
}
