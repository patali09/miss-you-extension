console.log("Hey i am popupscript");
document.addEventListener("DOMContentLoaded", function() {
    var loveYouButton = document.getElementById("startButton");
        loveYouButton.onclick= ()=> {
            browser.runtime.sendMessage("I am clicked")
        };
});

