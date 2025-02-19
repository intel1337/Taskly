import { component } from "./src/components/form.js"
import { Local } from "./src/services/db/local.js"

const addTask = document.querySelector('#add')
const darkModeButton = document.querySelector('#darkMode')

let taskArray = Local.getTasks('tasks') || []
component.loadTasks(taskArray)

// Dark mode toggle
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

addTask.addEventListener('click', () => {
    component.form.style = "left: 0%;"
})

component.submitForm.addEventListener('click', (event) => {
    event.preventDefault()
    component.showForm('tasks', taskArray)
})

export { taskArray }
