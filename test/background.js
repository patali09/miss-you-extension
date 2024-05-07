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
firebase.initializeApp(firebaseConfig);

// Changing popup.html based on condition
chrome.storage.local.get("partnerId", function(result){
  if(result.partnerId==null|| result.partnerId==undefined){
    chrome.browserAction.setPopup({ popup: "connect.html" });
  }
})
chrome.storage.local.get("uuid", function(result){
  if(result.uuid==null|| result.uuid==undefined){
    chrome.browserAction.setPopup({ popup: "signup.html" });
  }
})


chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse){
  firebase.database().ref("users/1654894").set({
    message: request
});

firebase.database().ref("users/1654894").on('value', (snapshot) => {
  let data = snapshot.val();
  console.log(data);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tabDetail = tabs[0]; // Assuming you want the details of the first active tab
    chrome.tabs.sendMessage(tabDetail.id, data); //sending message from popup to contentscript.js
});
});
});