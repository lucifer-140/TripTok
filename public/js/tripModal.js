// tripModal.js
window.addEventListener('DOMContentLoaded', () => {
    // Load the modal into the DOM
    fetch('../components/tripModal.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);

            // Add event listener for the "Next / Create Trip" button
            const nextTripButton = document.getElementById('nextTripButton');
            nextTripButton.addEventListener('click', validateAndProceed);
        })
        .catch(error => console.error('Error loading modal:', error));

    function validateAndProceed() {
        // Get input values
        const tripTitle = document.getElementById('tripTitle').value.trim();
        const tripDestination = document.getElementById('tripDestination').value.trim();
        const tripStartDate = document.getElementById('tripStartDate').value;
        const tripEndDate = document.getElementById('tripEndDate').value;
        const totalBudget = document.getElementById('totalBudget').value.trim();

        // Validate inputs
        if (!tripTitle || !tripDestination || !tripStartDate || !tripEndDate || !totalBudget) {
            alert("All fields are required. Please fill in all the information.");
            return;
        }

        // Optionally, check if the end date is after the start date
        if (new Date(tripEndDate) < new Date(tripStartDate)) {
            alert("End date must be after the start date.");
            return;
        }

        // Store trip details in local storage (or session) for use on the next page
        const tripDetails = {
            title: tripTitle,
            destination: tripDestination,
            startDate: tripStartDate,
            endDate: tripEndDate,
            budget: totalBudget // Include the budget in the trip details
        };

        localStorage.setItem('currentTrip', JSON.stringify(tripDetails));

        // Close the modal
        $('#tripModal').modal('hide');

        // Redirect to tripInformation.html
        window.location.href = 'tripInformation.html';
    }
});
