document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input fields, save button, and error message div
    var usernameInput = document.getElementById("username");
    var partnerUsernameInput = document.getElementById("partnerUsername");
    var saveButton = document.getElementById("saveButton");
    var errorMessageDiv = document.getElementById("errorMessage");

    // Add event listener to the save button
    saveButton.addEventListener("click", ()=>{
        // Get the values of the input fields
        var username = usernameInput.value.trim();
        var partnerUsername = partnerUsernameInput.value.trim();

        // Check if the username is empty
        if (username === "") {
            // Show the error message
            errorMessageDiv.style.display = "block";
            return; // Stop further execution
        }

        // If username is not empty, hide the error message and continue with saving the settings
        errorMessageDiv.style.display = "none";
        // You can add additional logic here to save the settings to storage, etc.
        
        console.log("Username:", username);
        console.log("Partner's Username:", partnerUsername);

        if (partnerUsername !== "" && partnerUsername !== null && partnerUsername !== undefined) {
            chrome.storage.session.set({ userName: username, partnerUserName: partnerUsername });
        } else {
            chrome.storage.session.set({ userName: username });
        }
        

    });
});
