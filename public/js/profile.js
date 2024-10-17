// JavaScript code for handling profile image and adding destinations



// Add destination functionality
document.getElementById('addDestinationButton').addEventListener('click', function () {
    const destinationName = document.getElementById('destinationName').value;
    if (destinationName) {
        const newDestination = document.createElement('li');
        newDestination.className = 'list-group-item d-flex justify-content-between align-items-center';
        newDestination.innerHTML = `${destinationName}<button class="btn btn-danger btn-small">Remove</button>`;
        
        // Add remove functionality
        newDestination.querySelector('.btn-danger').addEventListener('click', function () {
            newDestination.remove(); // Remove the destination from the list
        });

        document.getElementById('favoriteDestinationsList').appendChild(newDestination);
        document.getElementById('destinationName').value = ''; // Clear the input field
    }
});
