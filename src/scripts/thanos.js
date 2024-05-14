// src/scripts/thanos.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts';

const thanos = () => {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
  
  for (let i = contacts.length - 1; i >= 0; i--) {
    if (Math.random() < 0.5) {
      contacts.splice(i, 1);
    }
  }
  
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
};

export default thanos;
