// flights.js
document.getElementById('addFlight').addEventListener('click', function() {
    // Show the modal
    var flightModal = new bootstrap.Modal(document.getElementById('flightModal'));
    flightModal.show();
});

document.getElementById('saveFlight').addEventListener('click', function() {
    const flightNumber = document.getElementById('flightNumber').value;
    const seats = document.getElementById('seats').value;
    const documentInput = document.getElementById('flightDocument');

    if (flightNumber && seats) {
        const newRow = `<tr>
            <td>${flightNumber}</td>
            <td>${seats}</td>
            <td>${documentInput.files[0] ? documentInput.files[0].name : 'No file uploaded'}</td>
        </tr>`;
        document.querySelector('#addedFlightsTable tbody').insertAdjacentHTML('beforeend', newRow);
        
        // Reset input fields
        document.getElementById('flightForm').reset();

        // Close the modal
        var flightModal = bootstrap.Modal.getInstance(document.getElementById('flightModal'));
        flightModal.hide();
    }
});
