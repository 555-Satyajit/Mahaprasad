import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/landin';
import Signup from './page/singup';
import Login from './page/login';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl3lX2xnBLumcbsEWs0hyUTtDwYEHr0OM",
  authDomain: "mahaprasada-1988a.firebaseapp.com",
  projectId: "mahaprasada-1988a",
  storageBucket: "mahaprasada-1988a.firebasestorage.app",
  messagingSenderId: "812646251619",
  appId: "1:812646251619:web:97578d6e0a1e54025ecc56",
  measurementId: "G-G15E7380JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
