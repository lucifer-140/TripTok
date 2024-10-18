// Sample itinerary data
const itineraryData = [
    { day: "Day 1", description: "Arrival in Paris. Check-in to hotel. Evening stroll around the city." },
    { day: "Day 2", description: "Visit the Eiffel Tower. Lunch at a local cafe. Explore nearby shops." },
    { day: "Day 3", description: "Louvre Museum Tour. Evening cruise on the Seine River." }
];

// Populate days list
const daysList = document.getElementById('daysList');
itineraryData.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'list-group-item list-group-item-action';
    button.textContent = item.day;
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#dayModal');
    button.setAttribute('data-index', index);
    button.addEventListener('click', () => {
        // Show modal with itinerary details
        const dayModalLabel = document.getElementById('dayModalLabel');
        const dayDescription = document.getElementById('dayDescription');
        dayModalLabel.textContent = item.day + " Itinerary";
        dayDescription.textContent = item.description;
    });
    daysList.appendChild(button);
});

// Load the modal component
fetch('../components/itineraryDetailsModal.html')  
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalContainer').innerHTML = data;
    })
    .catch(error => console.error('Error loading modal component:', error));




    // Sample hotel and transport data
const hotelData = [
    { name: "Hilton Paris", checkIn: "Jan 10", checkOut: "Jan 12", location: "Paris City Center" },
    { name: "Marriott Paris", checkIn: "Jan 13", checkOut: "Jan 20", location: "Near Eiffel Tower" }
];

const transportData = [
    { type: "Car Rental", pickUp: "Charles de Gaulle Airport", dropOff: "Hilton Paris", bookingDate: "Jan 10" },
    { type: "Train", pickUp: "Paris Central Station", dropOff: "Marriott Paris", bookingDate: "Jan 13" }
];

// Populate hotel cards
const hotelList = document.getElementById('hotelList');
hotelData.forEach(hotel => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';
    card.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">${hotel.name}</h5>
                <p class="card-text"><strong>Check-in:</strong> ${hotel.checkIn}</p>
                <p class="card-text"><strong>Check-out:</strong> ${hotel.checkOut}</p>
                <p class="card-text"><strong>Location:</strong> ${hotel.location}</p>
            </div>
        </div>
    `;
    hotelList.appendChild(card);
});

// Populate transport cards
const transportList = document.getElementById('transportList');
transportData.forEach(transport => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';
    card.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">${transport.type}</h5>
                <p class="card-text"><strong>Pick-up:</strong> ${transport.pickUp}</p>
                <p class="card-text"><strong>Drop-off:</strong> ${transport.dropOff}</p>
                <p class="card-text"><strong>Booking Date:</strong> ${transport.bookingDate}</p>
            </div>
        </div>
    `;
    transportList.appendChild(card);
});

// Load the modal component
fetch('../components/itineraryDetailsModal.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalContainer').innerHTML = data;
    })
    .catch(error => console.error('Error loading modal component:', error));
