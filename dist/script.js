document.addEventListener('DOMContentLoaded', () => {
    let taskForm = document.querySelector('#task-form'); 

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Retrieve the current input values and trim any whitespace
        let titleInput = document.querySelector('#title').value.trim();
        let descInput = document.querySelector('#desc').value.trim();

        // Retrieve existing data from localStorage
        let existingTitle = localStorage.getItem('title');
        let existingDesc = localStorage.getItem('description');

        // If there is existing data, append the new data to it
        if (existingTitle) {
            titleInput = existingTitle + ', ' + titleInput;
        }
        if (existingDesc) {
            descInput = existingDesc + ', ' + descInput;
        }

        // Save the values to localStorage
        localStorage.setItem('title', titleInput);
        localStorage.setItem('description', descInput);

        // Optionally, you can clear the form fields after saving
        document.querySelector('#title').value = '';
        document.querySelector('#desc').value = '';

        // Log a message to the console
        console.log('Data successfully inserted into localStorage.');
    });
});