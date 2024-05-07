browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse){
    console.log(request); //logs "your message"
}