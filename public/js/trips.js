// trips.js

// Sample data for upcoming and finished trips
const upcomingTrips = [
    {
        title: "New York Adventure",
        start: "Dec 15, 2024",
        end: "Dec 25, 2024"
    }
]; // This should be replaced with data from your database
const finishedTrips = [
    {
        title: "New York Adventure",
        start: "Dec 15, 2024",
        end: "Dec 25, 2024"
    }
]; // This should also be replaced with data from your database

// Function to render upcoming trips
function renderUpcomingTrips() {
    const upcomingTripsContainer = document.getElementById("upcomingTrips");
    const noUpcomingTripsMessage = document.getElementById("noUpcomingTrips");
    
    if (upcomingTrips.length === 0) {
        noUpcomingTripsMessage.classList.remove("d-none");
    } else {
        upcomingTrips.forEach(trip => {
            const tripCard = `
                <div class="card mb-3 trip-card">
                    <div class="card-body">
                        <h5 class="card-title">${trip.title}</h5>
                        <p class="card-text">Starts: ${trip.startDate} | Ends: ${trip.endDate}</p>
                        <a href="#" class="btn btn-outline-primary">View Details</a>
                    </div>
                </div>
            `;
            upcomingTripsContainer.insertAdjacentHTML('beforeend', tripCard);
        });
        noUpcomingTripsMessage.classList.add("d-none");
    }
}

// Function to render finished trips
function renderFinishedTrips() {
    const finishedTripsContainer = document.getElementById("finishedTrips");
    const noFinishedTripsMessage = document.getElementById("noFinishedTrips");
    
    if (finishedTrips.length === 0) {
        noFinishedTripsMessage.classList.remove("d-none");
    } else {
        finishedTrips.forEach(trip => {
            const tripCard = `
                <div class="card mb-3 trip-card">
                    <div class="card-body">
                        <h5 class="card-title">${trip.title}</h5>
                        <p class="card-text">Completed: ${trip.completionDate}</p>
                        <a href="#" class="btn btn-outline-secondary">View Details</a>
                    </div>
                </div>
            `;
            finishedTripsContainer.insertAdjacentHTML('beforeend', tripCard);
        });
        noFinishedTripsMessage.classList.add("d-none");
    }
}

// Initial rendering of trips
renderUpcomingTrips();
renderFinishedTrips();
