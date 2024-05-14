// src/scripts/generateContacts.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  const contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  try {
    const dbData = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
    dbData.push(...contacts);
    fs.writeFileSync(PATH_DB, JSON.stringify(dbData, null, 2));
    console.log(`${number} contacts generated and added to db.json`);
  } catch (err) {
    console.error('Error generating contacts:', err);
  }
};

await generateContacts(5);
