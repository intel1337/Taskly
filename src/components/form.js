import { Task } from "./task.js"

const component = {
    form: document.querySelector('.form'),
    submitForm: document.querySelector('#submit'),
    inputTitre: document.querySelector("#text"),
    inputDesc: document.querySelector("#desc"),
    task: document.querySelector("template"),
    showForm(array) {
            component.form.style = "left: 100%;"
            const title = component.inputTitre.value;
            const description = component.inputDesc.value;
            if (title && description) {
                array.push(new Task(title, description));
                component.inputTitre.value = '';
                component.inputDesc.value = '';
            }
    }

}


export {component}
