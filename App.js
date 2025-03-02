import { Local } from "./src/services/local/Local.js"
import { onStart } from "./core/onStart.mjs"

export let taskArray = Local.getTasks('tasks') || []

onStart()






