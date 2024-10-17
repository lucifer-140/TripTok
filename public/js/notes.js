// notes.js
document.getElementById('addNotes').addEventListener('click', function() {
    var notesModal = new bootstrap.Modal(document.getElementById('notesModal'));
    notesModal.show();
});

document.getElementById('saveNotes').addEventListener('click', function() {
    const notes = document.getElementById('overallGoalsNotes').value;

    if (notes) {
        const newRow = `<tr>
            <td>${notes}</td>
        </tr>`;
        document.querySelector('#addedNotesTable tbody').insertAdjacentHTML('beforeend', newRow);

        // Reset input fields
        document.getElementById('notesForm').reset();

        var notesModal = bootstrap.Modal.getInstance(document.getElementById('notesModal'));
        notesModal.hide();
    }
});

