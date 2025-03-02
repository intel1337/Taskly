class Local {
    static saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    static setHabits(boolean){
        localStorage.setItem('darkmode', boolean)
    }
    static getHabits(){
        return localStorage.getItem('darkmode') === 'true' 
    }
    static getTasks(name) {
        return JSON.parse(localStorage.getItem(name));
    }

}
class Manager {
    static deleteTask(tasks, nameQuery, maxsize) {
        for (let i = 0; i < maxsize; i++) {
            if (tasks[i].title === nameQuery) {
                tasks.splice(i, 1); 
                break; 
            }
        }
        Local.saveTasks(tasks); 
    }
   
}


export {Manager}
export { Local }