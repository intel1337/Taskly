const TaskDb = require("./mongo.mjs");

class mongoController {
   static async add() {
    const newTodo = new TaskDb({ text: "TitleTest", text: "DescTItle",completed: false });
    await TaskDb.save();
    console.log("Todo added:", TaskDb);
   }
   static async getAll(){
    const tasks = await TaskDb.find();
    console.log("Todos:", TaskDb);

   }

}