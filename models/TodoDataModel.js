const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  todaydate: {
    type: String,
  },
  body: {
    type: String,
  },
});
module.exports =
  mongoose.models.TodoDataModel || mongoose.model("TodoDataModel", NoteSchema);
