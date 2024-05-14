// src/scripts/removeAllContacts.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts';

const removeAllContacts = () => {
  fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2));
};

export default removeAllContacts;
