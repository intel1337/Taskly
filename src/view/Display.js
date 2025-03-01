import { Components } from "../components/Components.js";

export function loadTasks(tasks) {
    tasks.forEach(task => {
        Components.createTask(task.title, task.desc, task.status);
    });
}