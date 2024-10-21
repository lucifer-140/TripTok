document.getElementById('addCurrency').addEventListener('click', function() {
    // Show the currency modal
    const currencyModal = new bootstrap.Modal(document.getElementById('currencyModal'));
    currencyModal.show();
});

// document.getElementById('saveCurrency').addEventListener('click', function() {
//     // Get the input values
//     const userCountry = document.getElementById('userCountryCurrency').value;
//     const destinationCountry = document.getElementById('destinationCountryCurrency').value;
//     const exchangeRate = document.getElementById('exchangeRate').value;

//     // Create a new row in the currency table
//     const tableBody = document.querySelector('#currencyTable tbody');
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${userCountry}</td>
//         <td>${destinationCountry}</td>
//         <td>${exchangeRate}</td>
//     `;
//     tableBody.appendChild(newRow);

//     // Close the modal
//     const currencyModal = bootstrap.Modal.getInstance(document.getElementById('currencyModal'));
//     currencyModal.hide();

//     // Clear the form inputs
//     document.getElementById('currencyForm').reset();
// });
