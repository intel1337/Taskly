import { Buttons } from "../src/components/events/Buttons.js"
import { loadTasks } from "../src/view/Display.js"
import { taskArray } from "../App.js";
import { Local } from "../src/services/local/Local.js";
import { Components } from "../src/components/Components.js";

export function onStart(){
    let count = 1
    Components.habits.darkmode = Local.getHabits()
        if(Components.habits.darkmode === true){
            document.body.classList.toggle('dark-mode')
        }
    Buttons.init(count)
    loadTasks(taskArray);

}
