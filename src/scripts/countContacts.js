// src/scripts/countContacts.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const dbData = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
    return dbData.length;
  } catch (err) {
    console.error('Error counting contacts:', err);
    return 0;
  }
};

console.log(await countContacts());
