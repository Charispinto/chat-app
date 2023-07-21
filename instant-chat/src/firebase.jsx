import React from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQzp0dO5v6zah-VV0-5V7HTCcWutgNb-k",
  authDomain: "instantchat-7342c.firebaseapp.com",
  projectId: "instantchat-7342c",
  storageBucket: "instantchat-7342c.appspot.com",
  messagingSenderId: "173574984342",
  appId: "1:173574984342:web:d2f7e20c2e05d579cd28b7"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);