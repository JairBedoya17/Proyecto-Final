const Sala = require("../models/sala");

function addSala(req, res) {
  const body = req.body;
  const sala = new Sala(body);
  sala.order = 1000;

  sala.save((err, salaStored) => {
    if (err) {
      res
        .status(400)
        .send({ code: 400, message: "La reservación que estas creando ya existe." });
    } else {
      if (!salaStored) {
        res
          .status(400)
          .send({ code: 400, message: "No se ha podido crear la reservación." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "La reservación creado correctamente." });
      }
    }
  });
}

function getSalas(req, res) {
  Sala.find()
    .sort({ order: "asc" })
    .exec((err, salasStored) => {
      if (err) {
        res.status(500).send({ code: 500, message: "Error del servidor." });
      } else {
        if (!salasStored) {
          res
            .status(404)
            .send({ code: 404, message: "No se ha encontrado ninguna reservación." });
        } else {
          res.status(200).send({ code: 200, salas: salasStored });
        }
      }
    });
}

function deleteSala(req, res) {
  const { id } = req.params;

  Sala.findByIdAndRemove(id, (err, salaDeleted) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Errorr del servidor." });
    } else {
      if (!salaDeleted) {
        res.status(404).send({ code: 404, message: "Reservación no encontrada." });
      } else {
        res.status(200).send({
          code: 200,
          message: "La reservación ha sido elinado correctamente."
        });
      }
    }
  });
}

function updateSala(req, res) {
  const salaData = req.body;
  const id = req.params.id;

  Sala.findByIdAndUpdate(id, salaData, (err, salaUpdate) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!salaUpdate) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ningun reservación." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "Reservación actualizado correctamente." });
      }
    }
  });
}

module.exports = {
  addSala,
  getSalas,
  deleteSala,
  updateSala
};
