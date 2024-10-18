document.getElementById('addInsurance').addEventListener('click', function() {
    const insuranceModal = new bootstrap.Modal(document.getElementById('insuranceModal'));
    insuranceModal.show();
});

document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const provider = document.getElementById('insuranceProvider').value;
    const type = document.getElementById('insuranceType').value;
    const policy = document.getElementById('policyNumber').value;

    const tableBody = document.querySelector('#insuranceTable tbody');
    const newRow = `<tr><td>${provider}</td><td>${type}</td><td>${policy}</td></tr>`;
    tableBody.insertAdjacentHTML('beforeend', newRow);

    // Reset the form
    this.reset();

    // Hide the modal
    const insuranceModal = bootstrap.Modal.getInstance(document.getElementById('insuranceModal'));
    insuranceModal.hide();
});
