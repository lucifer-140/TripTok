document.getElementById("addVisa").addEventListener("click", function () {
    const visaModal = new bootstrap.Modal(document.getElementById("visaModal"), {
        keyboard: false
    });
    visaModal.show();
});

document.getElementById("visaModalSubmit").addEventListener("click", function () {
    const visaDetails = document.getElementById("visaDetails").value;
    const issueDate = document.getElementById("issueDate").value;
    const expirationDate = document.getElementById("expirationDate").value;

    const tableBody = document.getElementById("visaTable").querySelector("tbody");
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${visaDetails}</td>
        <td>${issueDate}</td>
        <td>${expirationDate}</td>
    `;

    // Clear the modal inputs
    document.getElementById("visaDetails").value = "";
    document.getElementById("issueDate").value = "";
    document.getElementById("expirationDate").value = "";
    bootstrap.Modal.getInstance(document.getElementById("visaModal")).hide();
});
