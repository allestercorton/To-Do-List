document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.addEventListener('click', function() {
                taskItem.remove();
            });

            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
});
