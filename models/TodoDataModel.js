const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  todaydate: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
module.exports =
  mongoose.models.TodoDataModel || mongoose.model("TodoDataModel", NoteSchema);
