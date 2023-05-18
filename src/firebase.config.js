// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGsy8nfDM5pWR49uf5MwW_AZliTt5XdX8",
    authDomain: "toy-car-marketplace.firebaseapp.com",
    projectId: "toy-car-marketplace",
    storageBucket: "toy-car-marketplace.appspot.com",
    messagingSenderId: "536600630779",
    appId: "1:536600630779:web:e71e98a39f2e269af5a75e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app