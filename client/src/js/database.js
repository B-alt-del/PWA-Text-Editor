import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  const db = await openDB('jate', 1);
  const transaction = db.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');

  const result = await store.add({note: content})

  return result;

  //use callback to catch error
  console.error('putDb not implemented');}




// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  
  const group_db = await openDB('groups', 1)
  const transaction = group_db.transaction('groups', 'readwrite');
  const store = transaction.objectStore('groups'); //like a collection

  return await store.getAll();
  
  //use call back to catch errors
  console.error('getDb not implemented')};

initdb();

