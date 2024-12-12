// Function to display the login message
function displayLoginMessage() {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "<p class='info-message'>Log in to access the share button.</p>";
}

// Function to clear the results and search input
function refreshResults() {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Clear results
    document.getElementById("searchInput").value = ""; // Clear search input
}

// Add an event listener to trigger search on pressing "Enter"
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Check if the pressed key is "Enter"
        displayLoginMessage(); // Call the displayLoginMessage function
    }
});

// Optionally, add an event listener for the search button to call the same function
document.getElementById("searchButton").addEventListener("click", function() {
    displayLoginMessage();
});


// Show the login popup
function showLoginPopup() {
    const loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = "flex"; // Make the popup visible
}

// Hide the login popup
function hideLoginPopup() {
    const loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = "none"; // Hide the popup
}

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear previous error messages
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // Validation checks
    let isValid = true;

    if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    }

    if (password.length <= 6) {
        passwordError.style.display = "block";
        isValid = false;
    }

    // If validation passes, redirect to home.html
    if (isValid) {
        window.location.href = "home.html";
    }
});
