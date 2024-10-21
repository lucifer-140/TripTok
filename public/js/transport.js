document.getElementById('addTransport').addEventListener('click', function() {
    const transportModal = new bootstrap.Modal(document.getElementById('transportModal'));
    transportModal.show();
});

// document.getElementById('saveTransport').addEventListener('click', function() {
//     // Retrieve values from the transport modal inputs
//     const transportType = document.getElementById('transportType').value;
//     const transportDate = document.getElementById('transportDate').value;
//     const transportCosts = document.getElementById('transportCosts').value; // Changed from transportBudget to transportCosts
//     const transportDocuments = document.getElementById('transportDocuments').files;

//     // Reference to the table where transport details are listed
//     const transportTableBody = document.getElementById('transportTable').getElementsByTagName('tbody')[0];
//     const newRow = transportTableBody.insertRow();

//     // Populate the new row with transport details
//     newRow.innerHTML = `
//         <td>${transportType}</td>
//         <td>${transportDate}</td>
//         <td>${transportCosts}</td>
//         <td>${Array.from(transportDocuments).map(file => file.name).join(', ')}</td>
//     `;

//     // Reset the form after saving the transport details
//     document.getElementById('transportForm').reset();
//     const transportModal = bootstrap.Modal.getInstance(document.getElementById('transportModal'));
//     transportModal.hide();
// });
