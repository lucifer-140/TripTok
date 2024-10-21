document.getElementById('addAccommodation').addEventListener('click', function() {
    const accommodationModal = new bootstrap.Modal(document.getElementById('accommodationModal'));
    accommodationModal.show();
});

// document.getElementById('saveAccommodation').addEventListener('click', function() {
//     // Retrieve values from the accommodation modal inputs
//     const accommodationName = document.getElementById('accommodationName').value;
//     const checkIn = document.getElementById('checkIn').value;
//     const checkOut = document.getElementById('checkOut').value;
//     const accommodationCosts = document.getElementById('accommodationCosts').value; 
//     const accommodationDocuments = document.getElementById('accommodationDocuments').files;

//     // Reference to the table where accommodations are listed
//     const accommodationsTableBody = document.getElementById('accommodationsTable').getElementsByTagName('tbody')[0];
//     const newRow = accommodationsTableBody.insertRow();

//     // Populate the new row with accommodation details
//     newRow.innerHTML = `
//         <td>${accommodationName}</td>
//         <td>${checkIn}</td>
//         <td>${checkOut}</td>
//         <td>${accommodationCosts}</td>
//         <td>${Array.from(accommodationDocuments).map(file => file.name).join(', ')}</td>
//     `;

//     // Reset the form after saving the accommodation details
//     document.getElementById('accommodationForm').reset();
//     const accommodationModal = bootstrap.Modal.getInstance(document.getElementById('accommodationModal'));
//     accommodationModal.hide();
// });
