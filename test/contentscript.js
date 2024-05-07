chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse){
    console.log(request); //logs "your message"
});

