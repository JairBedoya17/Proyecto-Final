const express = require("express");
const SalaController = require("../controllers/sala");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-sala", [md_auth.ensureAuth], SalaController.addSala);
api.get("/get-salas", SalaController.getSalas);
api.delete(
  "/delete-sala/:id",
  [md_auth.ensureAuth],
  SalaController.deleteSala
);
api.put(
  "/update-sala/:id",
  [md_auth.ensureAuth],
  SalaController.updateSala
);

module.exports = api;
