// src/scripts/countContacts.js
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const countContacts = () => {
    const contacts = JSON.parse(fs.readFileSync(PATH_DB));
    return contacts.length;
};

console.log(countContacts());
