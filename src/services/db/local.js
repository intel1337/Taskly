class Local {
    static saveTasks(name, array) {
        localStorage.setItem(name, JSON.stringify(array));
    }
    static getTasks(name) {
        return JSON.parse(localStorage.getItem(name));
    }
    

}

export { Local }
