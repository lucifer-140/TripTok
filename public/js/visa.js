// visa.js
document.getElementById('addVisa').addEventListener('click', function() {
    var visaModal = new bootstrap.Modal(document.getElementById('visaModal'));
    visaModal.show();
});

document.getElementById('saveVisa').addEventListener('click', function() {
    const visaDetails = document.getElementById('visaDetails').value;

    if (visaDetails) {
        const newRow = `<tr>
            <td>${visaDetails}</td>
        </tr>`;
        document.querySelector('#addedVisaTable tbody').insertAdjacentHTML('beforeend', newRow);

        // Reset input fields
        document.getElementById('visaForm').reset();

        var visaModal = bootstrap.Modal.getInstance(document.getElementById('visaModal'));
        visaModal.hide();
    }
});
