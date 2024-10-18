document.getElementById('addFlight').addEventListener('click', function() {
    const flightModal = new bootstrap.Modal(document.getElementById('flightModal'));
    flightModal.show();
});

document.getElementById('saveFlight').addEventListener('click', function() {
    const flightNumber = document.getElementById('flightNumber').value;
    const seats = document.getElementById('seats').value;
    const flightDocuments = document.getElementById('flightDocuments').files;
    const flightDate = document.getElementById('flightDate').value;
    const flightBudget = document.getElementById('flightBudget').value;

    const flightsTableBody = document.getElementById('flightsTable').getElementsByTagName('tbody')[0];
    const newRow = flightsTableBody.insertRow();

    newRow.innerHTML = `
        <td>${flightNumber}</td>
        <td>${seats}</td>
        <td>${Array.from(flightDocuments).map(file => file.name).join(', ')}</td>
        <td>${flightDate}</td>
        <td>${flightBudget}</td>
    `;

    document.getElementById('flightForm').reset();
    const flightModal = bootstrap.Modal.getInstance(document.getElementById('flightModal'));
    flightModal.hide();
});
