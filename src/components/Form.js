import { Task } from "./Task.js"
import { Components } from "./Components.js";
import { Local } from "../services/db/Local.js";
import { taskArray } from "../../App.js";

class Form {
    static display(tasks) {
            Components.native.form.style = "left: 100%;"
            const title = Components.native.inputTitre.value 
            const description = Components.native.inputDesc.value 
            if (title && description) {
                Components.createTask(title,description);
                tasks.push(new Task(title, description));
                console.log(title)
                Local.saveTasks(taskArray)
                Components.native.inputTitre.value = '';
                Components.native.inputDesc.value = '';

                
            }
    }
}
export {Form}



