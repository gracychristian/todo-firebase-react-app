import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfgchwQ4or4fvv5DqJDWgKtLWf-doUWyA",
  authDomain: "todo-crud-a16f2.firebaseapp.com",
  projectId: "todo-crud-a16f2",
  storageBucket: "todo-crud-a16f2.appspot.com",
  messagingSenderId: "634322049619",
  appId: "1:634322049619:web:fcba917b493aaa267b04a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };