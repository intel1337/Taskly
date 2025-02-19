import { component } from "./src/components/form.js"

const addTask = document.querySelector('#add')
const darkModeButton = document.querySelector('#darkMode')

let taskArray = []

// Dark mode toggle
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

addTask.addEventListener('click', ()=>{
    component.form.style = "left: 0%;"
})

component.submitForm.addEventListener('click', (event) => {
    event.preventDefault();
    component.showForm(taskArray);
})
