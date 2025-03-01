import { Components } from "../Components.js"
import { Form } from "../Form.js"
import { taskArray } from "../../../App.js"
import { Local, Manager } from "../../services/db/Local.js"

export class Buttons {
    static init(count){

        Components.buttons.darkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode')
            count+=1
            if(count%2 != 0){
                Components.habits.darkmode = true
                Local.setHabits(Components.habits.darkmode)
            }
            if(count%2 === 0){
                Components.habits.darkmode = false
                Local.setHabits(Components.habits.darkmode)
            }
            })
        Components.buttons.addTaskButton.addEventListener('click', ()=>{
                Components.native.form.style = "left: 0%;"
            })
        Components.buttons.submitForm.addEventListener('click', (event) => {
            event.preventDefault();
            Form.display(taskArray)
        })

        Components.buttons.submitSearch.addEventListener('click', (event) => {
            event.preventDefault();
            Components.searchTask(taskArray)
        })
        
        Local.setHabits(Components.habits.darkmode)
    }
}