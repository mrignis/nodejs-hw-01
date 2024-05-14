// src/scripts/countContacts.js
const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

const countContacts = () => {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  return contacts.length;
};

module.exports = countContacts;
