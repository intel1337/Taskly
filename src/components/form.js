import { Task } from "./task.js"
import { Local } from "../services/db/local.js";

const component = {
    form: document.querySelector('.form'),
    submitForm: document.querySelector('#submit'),
    inputTitre: document.querySelector("#text"),
    inputDesc: document.querySelector("#desc"),
    task: document.querySelector("template"),

    showForm(name, array) {
        component.form.style = "left: 100%;"
        const title = component.inputTitre.value;
        const description = component.inputDesc.value;
        
        if (title && description) {
            array.push(new Task(title, description));
            Local.saveTasks(name, array);
            this.displayTask(title, description);
            component.inputTitre.value = '';
            component.inputDesc.value = '';
        }
    },

    displayTask(title, description) {
        let clone = this.task.content.cloneNode(true);
        clone.querySelector("h1").textContent = title;
        clone.querySelector("p").textContent = description;
        document.body.appendChild(clone);
    },

    loadTasks(array) {
        array.forEach(task => {
            this.displayTask(task.title, task.desc);
        });
    }
}

export {component}
