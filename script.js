var taskId = 0

function addTask() {

    var newTask = document.querySelector('#input-task').value

    if (newTask) {
        var element = document.getElementById("all-tasks")
        let task = `
            <div class="task" id="task${taskId++}">
                <span class="task-message">${newTask}</span>
                <div id="task-icons">
                    <i class='bx bx-info-circle'></i>
                    <i class='bx bx-x'></i>
                </div>
            </div>`    

        element.insertAdjacentHTML("beforeend", task)

        document.querySelector('#input-task').value = ''
    }
}