// src/scripts/removeAllContacts.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    fs.writeFileSync(PATH_DB, '[]');
    console.log('All contacts removed from db.json');
  } catch (err) {
    console.error('Error removing contacts:', err);
  }
};

await removeAllContacts();
