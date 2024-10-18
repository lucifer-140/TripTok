// navigation.js

// Function to handle redirection to different pages
function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}

// Event listener setup for buttons
document.addEventListener('DOMContentLoaded', () => {
    // Example: Button that redirects to tripInformation.html from the modal
    const nextTripButton = document.getElementById('nextTripButton');
    if (nextTripButton) {
        nextTripButton.addEventListener('click', () => {
            // Hide the modal before redirecting
            const modalElement = document.getElementById('tripModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide(); // Close the modal
            }
            redirectToPage('tripInformation.html'); // Redirect to the next page
        });
    }
});


function logout() {
    // Clear user data from local storage or session storage
    localStorage.removeItem('userData'); // Example for removing user data
    // Redirect to the sign-in page
    window.location.href = 'signIn.html'; // Redirect to your sign-in page
}
