
//this doesn't work beacuse chrome.tabs.query({active: true, currentWindow: true}) is async function
// console.log("Hey i am popupscript");
// document.addEventListener("DOMContentLoaded", function() {
//     var loveYouButton = document.getElementById("startButton");
//         loveYouButton.onclick= async()=> {
//             let enteredValue = document.getElementById("inputField").value;
//             let  [TabDetail] = await chrome.tabs.query({active: true, currentWindow: true});
//             chrome.tabs.sendMessage(TabDetail.id, enteredValue);
//         };
// });



console.log("Hey i am popupscript");
document.addEventListener("DOMContentLoaded", function() {
    var loveYouButton = document.getElementById("startButton");
    loveYouButton.onclick = () => {
        let enteredValue = document.getElementById("inputField").value;
        //sending messsage from popup to contentscript.js and background.js
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let tabDetail = tabs[0]; // Assuming you want the details of the first active tab
            chrome.tabs.sendMessage(tabDetail.id, enteredValue); //sending message from popup to contentscript.js
            chrome.runtime.sendMessage(enteredValue); //sending message from popup to background.js
        });
    };
});


