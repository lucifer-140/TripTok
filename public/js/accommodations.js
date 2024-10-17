// accommodations.js
document.getElementById('addAccommodation').addEventListener('click', function() {
    var accommodationModal = new bootstrap.Modal(document.getElementById('accommodationModal'));
    accommodationModal.show();
});

document.getElementById('saveAccommodation').addEventListener('click', function() {
    const name = document.getElementById('accommodationName').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const documentInput = document.getElementById('accommodationDocument');

    if (name && checkIn && checkOut) {
        const newRow = `<tr>
            <td>${name}</td>
            <td>${checkIn}</td>
            <td>${checkOut}</td>
            <td>${documentInput.files[0] ? documentInput.files[0].name : 'No file uploaded'}</td>
        </tr>`;
        document.querySelector('#addedAccommodationsTable tbody').insertAdjacentHTML('beforeend', newRow);
        
        // Reset input fields
        document.getElementById('accommodationForm').reset();
        
        var accommodationModal = bootstrap.Modal.getInstance(document.getElementById('accommodationModal'));
        accommodationModal.hide();
    }
});

