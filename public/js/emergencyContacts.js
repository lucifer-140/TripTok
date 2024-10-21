document.getElementById('addEmergencyContact').addEventListener('click', function() {
    const emergencyContactModal = new bootstrap.Modal(document.getElementById('emergencyContactModal'));
    emergencyContactModal.show();
});

// document.getElementById('emergencyContactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('contactName').value;
//     const phone = document.getElementById('contactPhone').value;
//     const relationship = document.getElementById('relationship').value;

//     const tableBody = document.querySelector('#emergencyContactTable tbody');
//     const newRow = `<tr><td>${name}</td><td>${phone}</td><td>${relationship}</td></tr>`;
//     tableBody.insertAdjacentHTML('beforeend', newRow);

//     // Reset the form
//     this.reset();

//     // Hide the modal
//     const emergencyContactModal = bootstrap.Modal.getInstance(document.getElementById('emergencyContactModal'));
//     emergencyContactModal.hide();
// });
