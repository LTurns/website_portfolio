// Models is where we create the mongoDB schemas for interacting with our database.
// More research into difference between schemas and tables.
// In node, models refer to the database tables & schemas.

// Here we simply declared a name and email field along with their respective data types in task Schema. (Mirroring the form on the front-end to structure what will go into the database when input by user)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let taskSchema = new Schema(
  {
    name: {
      type: String
  },
    email: {
      type: String
    },
  },
  {
    collection: "tasks",
  }
);

module.exports = mongoose.model("Task", taskSchema);
