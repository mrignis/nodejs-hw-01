// src/scripts/thanos.js

import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const dbData = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
    const survivedContacts = dbData.filter(() => Math.random() > 0.5);
    fs.writeFileSync(PATH_DB, JSON.stringify(survivedContacts, null, 2));
    console.log('Thanos has snapped his fingers. Some contacts vanished...');
  } catch (err) {
    console.error('Error executing Thanos snap:', err);
  }
};

await thanos();
