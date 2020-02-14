const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalaSchema = Schema({
  idSala: {
    type: Number,
    unique: true,
    required: true
  },
  nlab: String,
  materia: String,
  hinicio: Date,
  hfinal: Date,
  nomprofe: String
});

module.exports = mongoose.model("Sala", SalaSchema);
