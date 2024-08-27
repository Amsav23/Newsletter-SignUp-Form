// I need the user input to submit when they click the Subscribe button
// I need a function to handle the submit event
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // I need a way to use the elements I created
    // Create variables for the id's
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
    const cardContainer = document.getElementById("cardContainer");
    const userEmail = document.getElementById("user-email")

    // Reset messages
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden")
    successMessage.classList.add("hidden");

    // What will the error message say
    // I need to validate the email input
    if (!emailValue) {
        console.log("Email field is empty")
        // textContent means what the message will say
        errorMessage.textContent = "Valid email required";
        errorMessage.classList.remove("hidden");
        return; // Stop further processing
    }  
    else if (!validateEmail(emailValue)) {
        console.log("Invalid email format")
        errorMessage.textContent = "Valid email required";
        errorMessage.classList.remove("hidden");
        return; // Stop further processing
    }
    else {
        // Hide the card-container and show the success message
        cardContainer.classList.add("hidden");
        userEmail.textContent = emailValue;
        successMessage.classList.remove("hidden");
    }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function dismissMessage() {
    // Get the elements
    const successMessage = document.getElementById("success-message");
    const cardContainer = document.getElementById("cardContainer");

    // Hide the success message
    successMessage.classList.add("hidden");

    // Show the card container
    cardContainer.classList.remove("hidden");

    // Reset the form if needed
    document.getElementById("subscribe-form").reset();
    console.log("Dismissed")
}

// Attach the dismiss function to the button click event
document.getElementById("dismiss-btn").addEventListener("click", dismissMessage);