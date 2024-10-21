// Function to load modal components
function loadModalComponents() {
    const modalUrls = {
        flightModal: '../components/flightModal.html',
        accommodationModal: '../components/accommodationModal.html',
        transportModal: '../components/transportModal.html',
        currencyModal: '../components/currencyModal.html',
        emergencyContactModal: '../components/emergencyContactModal.html'
    };

    Object.keys(modalUrls).forEach(modalId => {
        fetch(modalUrls[modalId])
            .then(response => response.text())
            .then(data => {
                document.getElementById(`${modalId}Container`).innerHTML = data;
                if (modalId === 'flightModal') setupFlightModal();
                if (modalId === 'accommodationModal') setupAccommodationModal();
                if (modalId === 'transportModal') setupTransportModal();
                if (modalId === 'currencyModal') setupCurrencyModal(); // Setup for currency modal
                if (modalId === 'emergencyContactModal') setupEmergencyContactModal(); // Setup for emergency contact modal
            })
            .catch(error => console.error(`Error loading ${modalId}:`, error));
    });
}

// Function to handle adding accommodation data to the table
function setupAccommodationModal() {
    const saveAccommodationButton = document.getElementById('saveAccommodation');
    saveAccommodationButton.addEventListener('click', () => {
        const accommodationName = document.getElementById('accommodationName').value;
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;
        const accommodationCosts = document.getElementById('accommodationCosts').value; 
        const accommodationDocuments = document.getElementById('accommodationDocuments').files;

        // Create a new row in the accommodations table
        const accommodationsTable = document.getElementById('accommodationsTable').getElementsByTagName('tbody')[0];
        const newRow = accommodationsTable.insertRow();

        // Populate the new row with accommodation details
        newRow.insertCell(0).innerText = accommodationName;
        newRow.insertCell(1).innerText = checkIn;
        newRow.insertCell(2).innerText = checkOut;
        newRow.insertCell(3).innerText = accommodationCosts;

        // Handle the document display
        const documentCell = newRow.insertCell(4);
        if (accommodationDocuments.length > 0) {
            const docList = document.createElement('ul');
            Array.from(accommodationDocuments).forEach(file => {
                const listItem = document.createElement('li');
                listItem.innerText = file.name;
                docList.appendChild(listItem);
            });
            documentCell.appendChild(docList);
        } else {
            documentCell.innerText = 'No Documents';
        }

        // Reset the form after saving the accommodation details
        document.getElementById('accommodationForm').reset();
        const accommodationModal = bootstrap.Modal.getInstance(document.getElementById('accommodationModal'));
        accommodationModal.hide();
    });
}

// Function to handle adding transport data to the table
function setupTransportModal() {
    const saveTransportButton = document.getElementById('saveTransport');
    saveTransportButton.addEventListener('click', () => {
        const transportType = document.getElementById('transportType').value;
        const transportDate = document.getElementById('transportDate').value;
        const transportCosts = document.getElementById('transportCosts').value; 
        const transportDocuments = document.getElementById('transportDocuments').files;

        // Create a new row in the transport table
        const transportTable = document.getElementById('transportTable').getElementsByTagName('tbody')[0];
        const newRow = transportTable.insertRow();

        // Populate the new row with transport details
        newRow.insertCell(0).innerText = transportType;
        newRow.insertCell(1).innerText = transportDate;
        newRow.insertCell(2).innerText = transportCosts;

        // Handle the document display
        const documentCell = newRow.insertCell(3);
        if (transportDocuments.length > 0) {
            const docList = document.createElement('ul');
            Array.from(transportDocuments).forEach(file => {
                const listItem = document.createElement('li');
                listItem.innerText = file.name;
                docList.appendChild(listItem);
            });
            documentCell.appendChild(docList);
        } else {
            documentCell.innerText = 'No Documents';
        }

        // Reset the form after saving the transport details
        document.getElementById('transportForm').reset();
        const transportModal = bootstrap.Modal.getInstance(document.getElementById('transportModal'));
        transportModal.hide();
    });
}

// Function to handle adding emergency contact data to the table
function setupEmergencyContactModal() {
    const emergencyContactForm = document.getElementById('emergencyContactForm');
    const saveEmergencyContactButton = document.getElementById('saveEmergencyContact');

    // Handle the button click for adding an emergency contact
    saveEmergencyContactButton.addEventListener('click', () => {
        if (emergencyContactForm.checkValidity()) { // Check form validity
            const name = document.getElementById('contactName').value;
            const phone = document.getElementById('contactPhone').value;
            const relationship = document.getElementById('relationship').value;

            // Create a new row in the emergency contact table
            const tableBody = document.querySelector('#emergencyContactTable tbody');
            const newRow = tableBody.insertRow();

            // Populate the new row with emergency contact details
            newRow.insertCell(0).innerText = name;
            newRow.insertCell(1).innerText = phone;
            newRow.insertCell(2).innerText = relationship;

            // Reset the form
            emergencyContactForm.reset();

            // Hide the modal
            const emergencyContactModalInstance = bootstrap.Modal.getInstance(document.getElementById('emergencyContactModal'));
            emergencyContactModalInstance.hide();
        } else {
            emergencyContactForm.reportValidity(); 
        }
    });
}

// Function to handle adding flight data to the table
function setupFlightModal() {
    const saveFlightButton = document.getElementById('saveFlight');
    saveFlightButton.addEventListener('click', () => {
        const flightNumber = document.getElementById('flightNumber').value;
        const flightDate = document.getElementById('flightDate').value;
        const departureTime = document.getElementById('departureTime').value;
        const arrivalTime = document.getElementById('arrivalTime').value;
        const flightCost = document.getElementById('flightCost').value;
        const flightDocuments = document.getElementById('flightDocuments').files;

        // Create a new row in the flights table
        const flightsTable = document.getElementById('flightsTable').getElementsByTagName('tbody')[0];
        const newRow = flightsTable.insertRow();

        // Populate the new row with flight details
        newRow.insertCell(0).innerText = flightNumber;
        newRow.insertCell(1).innerText = flightDate;
        newRow.insertCell(2).innerText = departureTime;
        newRow.insertCell(3).innerText = arrivalTime;
        newRow.insertCell(4).innerText = flightCost;

        // Handle the document display
        const documentCell = newRow.insertCell(5);
        if (flightDocuments.length > 0) {
            const docList = document.createElement('ul');
            Array.from(flightDocuments).forEach(file => {
                const listItem = document.createElement('li');
                listItem.innerText = file.name;
                docList.appendChild(listItem);
            });
            documentCell.appendChild(docList);
        } else {
            documentCell.innerText = 'No Documents';
        }

        // Reset the form after saving the flight details
        document.getElementById('flightForm').reset();
        const flightModal = bootstrap.Modal.getInstance(document.getElementById('flightModal'));
        flightModal.hide();
    });
}

// Function to handle adding currency data to the table
function setupCurrencyModal() {
    const saveCurrencyButton = document.getElementById('saveCurrency');
    saveCurrencyButton.addEventListener('click', () => {
        const userCountry = document.getElementById('userCountryCurrency').value;
        const destinationCountry = document.getElementById('destinationCountryCurrency').value;
        const exchangeRate = document.getElementById('exchangeRate').value;

        // Create a new row in the currency table
        const currencyTable = document.getElementById('currencyTable').getElementsByTagName('tbody')[0];
        const newRow = currencyTable.insertRow();

        // Populate the new row with currency exchange details
        newRow.insertCell(0).innerText = userCountry;
        newRow.insertCell(1).innerText = destinationCountry;
        newRow.insertCell(2).innerText = exchangeRate;

        // Reset the form after saving the currency details
        document.getElementById('currencyForm').reset();
        const currencyModal = bootstrap.Modal.getInstance(document.getElementById('currencyModal'));
        currencyModal.hide();
    });
}

// Initialize all modal setups
document.addEventListener('DOMContentLoaded', () => {
    loadModalComponents();
    setupEmergencyContactModal();
    setupFlightModal();
    setupAccommodationModal();
    setupTransportModal();
    setupCurrencyModal();
});
