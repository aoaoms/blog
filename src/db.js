// db.js
import Dexie from 'dexie';

export const db = new Dexie('aiduo');
db.version(1).stores({
    page: '++id, content, image', // Primary key and indexed props
});