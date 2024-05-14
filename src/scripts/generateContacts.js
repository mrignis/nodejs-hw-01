// src/scripts/generateContacts.js
import faker from '@faker-js/faker';
import fs from 'fs';
import { PATH_DB } from '../constants/contacts';
import createFakeContact from '../utils/createFakeContact';

const generateContacts = (count) => {
  const existingContacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  const newContacts = [];

  for (let i = 0; i < count; i++) {
    newContacts.push(createFakeContact(faker));
  }

  const updatedContacts = existingContacts.concat(newContacts);
  fs.writeFileSync(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};

export default generateContacts;
