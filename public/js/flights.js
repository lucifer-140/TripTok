document.getElementById('addFlight').addEventListener('click', function () {
    const flightModal = new bootstrap.Modal(document.getElementById('flightModal'));
    flightModal.show();
});

document.getElementById('saveFlight').addEventListener('click', function () {
    // Retrieve values from the flight modal inputs
    const flightNumber = document.getElementById('flightNumber').value;
    const flightDate = document.getElementById('flightDate').value;
    const departureTime = document.getElementById('departureTime').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const flightCost = document.getElementById('flightCost').value;
    const flightDocuments = document.getElementById('flightDocuments').files;

    // Reference to the table where flights are listed
    const flightsTableBody = document.getElementById('flightsTable').getElementsByTagName('tbody')[0];
    const newRow = flightsTableBody.insertRow();

    // Populate the new row with flight details
    newRow.innerHTML = `
        <td>${flightNumber}</td>
        <td>${flightDate}</td>
        <td>${departureTime}</td>
        <td>${arrivalTime}</td>
        <td>${flightCost}</td>
        <td>${Array.from(flightDocuments).map(file => file.name).join(', ')}</td>
    `;

    // Reset the form after saving the flight details
    document.getElementById('flightForm').reset();
    const flightModal = bootstrap.Modal.getInstance(document.getElementById('flightModal'));
    flightModal.hide();
});


