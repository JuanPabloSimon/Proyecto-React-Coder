import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-mGjwLVTlzV8GSeI8Aw7_W84lXzDI2TY",
  authDomain: "proyecto-react-ed4a1.firebaseapp.com",
  projectId: "proyecto-react-ed4a1",
  storageBucket: "proyecto-react-ed4a1.appspot.com",
  messagingSenderId: "62021990324",
  appId: "1:62021990324:web:bb391d1080e65c6e7a64e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)