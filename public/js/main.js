// js/main.js
window.addEventListener('DOMContentLoaded', () => {
    // Load the modal into the DOM
    fetch('../components/tripModal.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading modal:', error));

    // Check for trips stored in local storage or session data
    const trips = JSON.parse(localStorage.getItem('userTrips')) || [];

    const upcomingTripsSection = document.querySelector('.upcoming-trips-section');

    if (trips.length === 0) {
        // Load the "No Trips Yet" card if there are no trips
        fetch('../components/noTripCard.html')
            .then(response => response.text())
            .then(data => {
                upcomingTripsSection.innerHTML = data;
            })
            .catch(error => console.error('Error loading no trips card:', error));
    } else {
        // Load the trip cards if trips are present
        fetch('../components/tripCard.html')
            .then(response => response.text())
            .then(tripCardTemplate => {
                trips.forEach(trip => {
                    let tripCardHtml = tripCardTemplate
                        .replace('{{tripTitle}}', trip.title)
                        .replace('{{tripStartDate}}', trip.startDate)
                        .replace('{{tripEndDate}}', trip.endDate);
                    
                    upcomingTripsSection.insertAdjacentHTML('beforeend', tripCardHtml);
                });
            })
            .catch(error => console.error('Error loading trip cards:', error));
    }
});



