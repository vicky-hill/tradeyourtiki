import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbkZtJGZQTQEJuYh0NIqFZSWdC8bE0AgY",
  authDomain: "trade-your-tiki.firebaseapp.com",
  projectId: "trade-your-tiki",
  storageBucket: "trade-your-tiki.appspot.com",
  messagingSenderId: "879972013751",
  appId: "1:879972013751:web:a13873a10da3fed54adf32",
  measurementId: "G-GSQWCJ68HJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
// Add authorization to firebase project to use auth features

export const authorization = {
  resetPassword: (options, email) => async dispatch => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve(dispatch({
            type: success
          }));
        })
        .catch(err => {
          reject(dispatch({
            type: failure,
            payload: err?.message
          }));
        });
    }

    return new Promise(promise);
  }
}