var taskId = 0

function addTask() {
    var newTask = document.querySelector('#input-task').value

    if (newTask != '') {
        var allTasks = document.getElementById('all-tasks')

        let taskBase = `
            <div class="task" id="task${taskId++}">
                <span class="task-message">${newTask}</span>
                <div class="task-icons">
                    <i class="bx bx-info-circle"></i>
                    <i class="bx bx-x"></i>
                </div>
            </div>`

        allTasks.insertAdjacentHTML("beforeend", taskBase)
        document.querySelector("#input-task").value = ""
    }
}