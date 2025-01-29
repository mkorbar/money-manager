import { initializeApp } from 'firebase/app';
import {
    getDatabase, ref, onValue, push,
    get, remove
} from 'firebase/database';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

const DB_NAME = 'expences';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function saveExpense(expense) {
    console.log('saving expense', expense);
    const key = push(ref(db, `${DB_NAME}/`), expense);
    console.log(key);
}

export async function deleteExpense(expenseID) {
    remove(ref(db, `${DB_NAME}/` + expenseID));
    window.location.reload();
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