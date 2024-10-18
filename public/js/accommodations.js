document.getElementById('addAccommodation').addEventListener('click', function() {
    const accommodationModal = new bootstrap.Modal(document.getElementById('accommodationModal'));
    accommodationModal.show();
});

document.getElementById('saveAccommodation').addEventListener('click', function() {
    const accommodationName = document.getElementById('accommodationName').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const accommodationDocuments = document.getElementById('accommodationDocuments').files;
    const accommodationBudget = document.getElementById('accommodationBudget').value;

    const accommodationsTableBody = document.getElementById('accommodationsTable').getElementsByTagName('tbody')[0];
    const newRow = accommodationsTableBody.insertRow();

    newRow.innerHTML = `
        <td>${accommodationName}</td>
        <td>${checkIn}</td>
        <td>${checkOut}</td>
        <td>${Array.from(accommodationDocuments).map(file => file.name).join(', ')}</td>
        <td>${accommodationBudget}</td>
    `;

    document.getElementById('accommodationForm').reset();
    const accommodationModal = bootstrap.Modal.getInstance(document.getElementById('accommodationModal'));
    accommodationModal.hide();
});
