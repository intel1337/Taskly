import { taskArray } from "../../App.js";
import { Local } from "../services/local/Local.js";
import { Manager } from "../services/local/Local.js";


class Components {
    static habits = {
        darkmode: false,
    };
    static buttons = {
        addTaskButton: document.querySelector('#add'),
        darkModeButton: document.querySelector('#darkMode'),
        submitForm: document.querySelector('#submit'),
        submitSearch: document.querySelector('#submitSearch')
    };
    static native = {
        form: document.querySelector('.form'),
        inputTitre: document.querySelector("#text"),
        inputDesc: document.querySelector("#desc"),
        task:  document.querySelector("template"),
        searchbar: document.querySelector('#search'),
    };
    static createTask(titre, description, status){
        let clone = Components.native.task.content.cloneNode(true);
        let deleteBtn = clone.querySelector("button")
        let container = clone.querySelector('.case');
        let validTask = clone.querySelector("#taskCheck")
        clone.querySelector("h1").textContent = titre;
        clone.querySelector("p").textContent = description;
        clone.style = ".case"
        document.body.appendChild(clone);
        deleteBtn.addEventListener('click', ()=>{
            container.style = "display: none;";
            Manager.deleteTask(taskArray, titre, taskArray.length); 
            Local.saveTasks(taskArray)
        });
        validTask.addEventListener('click', ()=>{
            Manager.deleteTask(taskArray, titre, taskArray.length); 
            setTimeout(() => {
                  container.style.display = "none"
            }, 250);
          
        })
    };
    
    static clearTasks() {
        const taskElements = document.querySelectorAll('.case');
        taskElements.forEach(task => {
            task.remove();
        });
    }

    static searchTask(tasks){
        let query = Components.native.searchbar.value;
        Components.clearTasks(); 
        if(query === ''){
            tasks.forEach(element => {
                Components.createTask(element.title, element.desc);
            });
        } else {
            tasks.forEach(element => {
                let result = element.title.includes(query) || element.desc.includes(query);
                if(result===true){
                    Components.createTask(element.title, element.desc);
                }
            });
        }
    }
    
}


export {Components}
