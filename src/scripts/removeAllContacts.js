// src/scripts/removeAllContacts.js
const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

const removeAllContacts = () => {
  fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2));
};

module.exports = removeAllContacts;
