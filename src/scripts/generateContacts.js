// src/scripts/generateContacts.js
const faker = require('@faker-js/faker');
const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');
const createFakeContact = require('../utils/createFakeContact');

const generateContacts = (count) => {
  const existingContacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  const newContacts = [];

  for (let i = 0; i < count; i++) {
    newContacts.push(createFakeContact(faker));
  }

  const updatedContacts = existingContacts.concat(newContacts);
  fs.writeFileSync(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};

module.exports = generateContacts;
