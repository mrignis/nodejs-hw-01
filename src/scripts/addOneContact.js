// src/scripts/addOneContact.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  try {
    const dbData = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
    dbData.push(newContact);
    fs.writeFileSync(PATH_DB, JSON.stringify(dbData, null, 2));
    console.log('One contact added to db.json');
  } catch (err) {
    console.error('Error adding contact:', err);
  }
};

await addOneContact();
