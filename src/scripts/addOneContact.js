// src/scripts/addOneContact.js
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs';

export const addOneContact = async () => {
    const contact = createFakeContact();
    const contacts = JSON.parse(fs.readFileSync(PATH_DB));
    
    contacts.push(contact);

    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
};

await addOneContact();
