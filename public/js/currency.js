// currency.js
document.getElementById('addCurrency').addEventListener('click', function() {
    var currencyModal = new bootstrap.Modal(document.getElementById('currencyModal'));
    currencyModal.show();
});

document.getElementById('saveCurrency').addEventListener('click', function() {
    const userCountry = document.getElementById('userCountryCurrency').value;
    const destinationCountry = document.getElementById('destinationCountryCurrency').value;

    if (userCountry && destinationCountry) {
        const newRow = `<tr>
            <td>${userCountry}</td>
            <td>${destinationCountry}</td>
        </tr>`;
        document.querySelector('#addedCurrencyTable tbody').insertAdjacentHTML('beforeend', newRow);

        // Reset input fields
        document.getElementById('currencyForm').reset();

        var currencyModal = bootstrap.Modal.getInstance(document.getElementById('currencyModal'));
        currencyModal.hide();
    }
});

