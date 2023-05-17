import {initializeApp} from 'firebase/app'
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDa80vyi09teJhKAU4EhMrF8MwqWQfomYU",
    authDomain: "todolist-e1c5e.firebaseapp.com",
    projectId: "todolist-e1c5e",
    storageBucket: "todolist-e1c5e.appspot.com",
    messagingSenderId: "67248003215",
    appId: "1:67248003215:web:9f1eaba9feb7e1bcf838fa"
}
// Initialize Firebase

const app = initializeApp(firebaseConfig);
//Export firestore database
//It will be imported into your react app whenever it is needed
export const db = getFireStore(app);