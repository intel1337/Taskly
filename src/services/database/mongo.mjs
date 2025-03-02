const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CONNECT = {
    rootstring: `${process.env.MONGO_CONNECT_STRING}`,
}



const newTaskModel = new mongoose.Schema({
    text: String,
    text: String,
    completed: Boolean,
  });

const TaskDb = mongoose.model("TaskDb", newTaskModel);



mongoose.connect(CONNECT.rootstring , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));


  
 module.exports = TaskDb;

  