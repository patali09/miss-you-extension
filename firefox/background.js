  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBCOoCtCobQZrrNQWg6uwmxJZMEsghIEO4",
    authDomain: "miss-you-5c11e.firebaseapp.com",
    databaseURL: "https://miss-you-5c11e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "miss-you-5c11e",
    storageBucket: "miss-you-5c11e.appspot.com",
    messagingSenderId: "1027026610169",
    appId: "1:1027026610169:web:46a0db2b077c258c77bf28",
    measurementId: "G-XQMVLJD7FF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
