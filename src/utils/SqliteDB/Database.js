import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase(
  {
    name: 'allUsers',
    location: 'default',
  },
  () => {
    console.log('Database connected!');
  },
  error => console.log('Database error', error),
);

const createTable = () => {
  const query_create = `CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE, 
      password TEXT NOT NULL,
      organization TEXT NOT NULL,
      state TEXT NOT NULL,
      city TEXT NOT NULL
    );`;
  db.transaction(
    tx => {
      tx.executeSql(
        query_create,
        [],
        (tx, results) => {
          console.log('Table created successfully');
        },
        (tx, error) => {
          console.log('Error creating table:', error);
        },
      );
    },
    error => {
      console.log('Error executing transaction:', error);
    },
  );
};
const handleCreateUser = formData => {
  const {name, email, password, organization, state, city} = formData;

  const query_insert =
    'INSERT INTO users (name, email, password, organization, state, city) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [name, email, password, organization, state, city];

  db.transaction(
    tx => {
      tx.executeSql(
        query_insert,
        params,
        (tx, results) => {
          console.log('User created successfully');
        },
        (tx, error) => {
          console.log('Error creating user:', error);
        },
      );
    },
    error => {
      console.log('Error executing transaction:', error);
    },
  );
};

export {db, createTable, handleCreateUser};
