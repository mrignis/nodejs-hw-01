// src/scripts/getAllContacts.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const dbData = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
    return dbData;
  } catch (err) {
    console.error('Error getting contacts:', err);
    return [];
  }
};

console.log(await getAllContacts());
