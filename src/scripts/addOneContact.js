// src/scripts/addOneContact.js
const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');
const createFakeContact = require('../utils/createFakeContact');

const addOneContact = () => {
  const existingContacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  const newContact = createFakeContact();
  
  existingContacts.push(newContact);
  
  fs.writeFileSync(PATH_DB, JSON.stringify(existingContacts, null, 2));
};

module.exports = addOneContact;
