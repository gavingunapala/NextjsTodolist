const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});
module.exports = mongoose.models.models || mongoose.model("models", NoteSchema);
