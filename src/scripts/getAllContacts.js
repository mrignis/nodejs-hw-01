// src/scripts/getAllContacts.js
import fs from 'fs';
import { PATH_DB } from '../constants/contacts';

const getAllContacts = () => {
  return JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));
};

export default getAllContacts;
