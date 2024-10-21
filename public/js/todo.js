document.addEventListener('DOMContentLoaded', () => {
    const todoCardsContainer = document.getElementById('todoCards');
    const addTodoModal = new bootstrap.Modal(document.getElementById('addTodoModal'));
    const saveTodoBtn = document.getElementById('saveTodoBtn');
    const todoForm = document.getElementById('todoForm');
    let currentDay = null;
    const todos = {}; // Object to store to-dos for each day

    // Retrieve trip details from local storage
    const tripDetails = JSON.parse(localStorage.getItem('currentTrip'));
    if (!tripDetails) {
        alert("No trip details found. Please create a trip first.");
        return; // Exit if no trip details found
    }

    // Get start and end dates from trip details
    const startDate = new Date(tripDetails.startDate);
    const endDate = new Date(tripDetails.endDate);
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    // example:
    // const startDate = new Date('2023-11-12');
    // const endDate = new Date('2023-11-15');
    // const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    // Create cards for each day dynamically
    for (let i = 0; i < numberOfDays; i++) {
        const cardDate = new Date(startDate);
        cardDate.setDate(startDate.getDate() + i);

        // Initialize the to-do list for the current day
        todos[i] = [];

        const card = document.createElement('div');
        card.className = 'col-md-3 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <img src="../assets/default-image.png" class="card-img-top" alt="To-Do Image">
                <div class="card-body">
                    <h5 class="card-title">Day ${i + 1} - ${cardDate.toDateString()}</h5>
                    <ul class="list-group list-group-flush" id="todoList-${i}">
                        <li class="list-group-item text-muted">No to-dos yet</li>
                    </ul>
                    <button class="btn btn-sm btn-outline-primary add-todo-btn mt-2" data-day="${i}">+ Add To-Do</button>
                </div>
            </div>
        `;
        todoCardsContainer.appendChild(card);
    }

    // Event listener for Add To-Do buttons
    todoCardsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-todo-btn')) {
            currentDay = event.target.getAttribute('data-day');
            resetModalFields(); // Clear modal input fields before showing it
            addTodoModal.show();
        }
    });

    // Save To-Do item when Save button is clicked
    saveTodoBtn.addEventListener('click', () => {
        const title = document.getElementById('todoTitle').value;
        const description = document.getElementById('todoDescription').value;
        const startTime = document.getElementById('todoStartTime').value;
        const endTime = document.getElementById('todoEndTime').value;
        const location = document.getElementById('todoLocation').value;

        // Add the new to-do to the appropriate day's list
        todos[currentDay].push({ title, description, startTime, endTime, location });

        updateTodoList(currentDay);
        addTodoModal.hide();
    });

    // Function to update the to-do list displayed on the card
    function updateTodoList(dayIndex) {
        const todoListElement = document.getElementById(`todoList-${dayIndex}`);
        todoListElement.innerHTML = '';

        todos[dayIndex].forEach(todo => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${todo.startTime} - ${todo.endTime}: ${todo.title} at ${todo.location}`;
            todoListElement.appendChild(listItem);
        });
    }

    // Function to clear the modal input fields
    function resetModalFields() {
        todoForm.reset(); // Resets all fields in the form to their default values
    }
});
