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

    // Prepare the form's UI for a new submission
    // Clear/hide any previous error or success messages
    errorMessage.textContent = ""; // Makes sure any old error messages are cleared out before the form is checked again
    errorMessage.classList.add("hidden")
    successMessage.classList.add("hidden");

    // What will the error message say
    // I need to VALIDATE the email input
    if (!emailValue) { // check is emailValue is falsy
        // if `emailValue` is falsy (an empty string `""`, `null`, `undefined`), the conditions evaluates to `true`
        // if `true`, the `if` statement then executes
        console.log("Email field is empty"); // check if it's running in the console
        errorMessage.textContent = "Valid email required"; // `.textContent` means what the message will say
        errorMessage.classList.remove("hidden"); // Show the error message on the page
        return; // Stop further processing
    }  
    else if (!validateEmail(emailValue)) { // this only runs if the previous `if` or `else if` conditions were false
        // This calls the function `validateEmail`, passing `emailValue` (the user’s email input) as an argument
        // This checks whether the provided `emailValue` is in an INVALID format
        // If it is, the code inside this `else if` block will execute

        console.log("Invalid email format"); // Debugging function
        errorMessage.textContent = "Valid email required";
        errorMessage.classList.remove("hidden"); // Show the error message on the page
        return; // Stop further processing
    }
    else { // This runs when the email input has passed all checks and is valid
        // I want to hide the `card-container` and SHOW the success message
        cardContainer.classList.add("hidden"); // This hides the `cardContainer` element from view
        userEmail.textContent = emailValue; // This displays the user's email address they entered after subscribing
        successMessage.classList.remove("hidden"); // Show the success message on the page
    }
}

function validateEmail(email) { // This determines whether the provided email string is in a VALID format according to a pattern (regular expression)
    // The `email` parameter represents the email address I want to validate
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // This line declares a constant variable named `emailPattern`
    // The value of this constant is a regular expression (regex), which is used to define the pattern that the email must match to be considered valid
    
    return emailPattern.test(email);
    // This line returns the result of the `test` method, meaning the function `validateEmail` will return 
    // `true` if the email is valid according to the pattern and ``false` if it is not.
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