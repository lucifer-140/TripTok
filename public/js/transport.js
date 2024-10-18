document.getElementById('addTransport').addEventListener('click', function() {
    const transportModal = new bootstrap.Modal(document.getElementById('transportModal'));
    transportModal.show();
});

document.getElementById('saveTransport').addEventListener('click', function() {
    const transportType = document.getElementById('transportType').value;
    const transportDate = document.getElementById('transportDate').value;
    const transportDocuments = document.getElementById('transportDocuments').files;
    const transportBudget = document.getElementById('transportBudget').value;

    const transportTableBody = document.getElementById('transportTable').getElementsByTagName('tbody')[0];
    const newRow = transportTableBody.insertRow();

    newRow.innerHTML = `
        <td>${transportType}</td>
        <td>${transportDate}</td>
        <td>${Array.from(transportDocuments).map(file => file.name).join(', ')}</td>
        <td>${transportBudget}</td>
    `;

    document.getElementById('transportForm').reset();
    const transportModal = bootstrap.Modal.getInstance(document.getElementById('transportModal'));
    transportModal.hide();
});
