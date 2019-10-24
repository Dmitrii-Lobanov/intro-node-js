const fs = require('fs')
const path = require('path')

const contactsLocation = path.join(__dirname, 'contacts.json')

const getContacts = () => {
  const contacts = fs.readFileSync(contactsLocation)
    .toString()
  return JSON.parse(contacts);
}

const saveContacts = (contacts) => {
  fs.writeFileSync(contactsLocation, JSON.stringify(contacts));
}

module.exports = { contactsLocation, getContacts, saveContacts }

