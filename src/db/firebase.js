import { initializeApp } from 'firebase/app';
import {
    getDatabase, ref, onValue, push,
    get,
} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,

};
console.log(firebaseConfig);
const DB_NAME = 'expences';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function saveExpense(expense) {
    console.log('saving expense', expense);
    const key = push(ref(db, `${DB_NAME}/`), expense);
    console.log(key);
}

export async function getExpenses() {
    const dataSnapshot = await get(ref(db, `${DB_NAME}/`));
    return dataSnapshot.toJSON()
}


export function watchChanges() {
    const tictacRef = ref(db, `${DB_NAME}/latest`);

    onValue(tictacRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}