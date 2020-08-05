
const db = require("../models");
const config = require("../config/auth.config");
const check =require("../middleware/check")


const Ubicacion = db.ubicaciones;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.todas = (req, res) => {
   
    Ubicacion.findAll({ where: {    
      user: req.params.user }

  }) .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    })
};

exports.buscar = (req, res) => {
   
    Ubicacion.findOne({
      where: {    
          id: req.params.id }
      })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    })
};

exports.buscarp = (req, res) => {
   console.log("sacando padres "+req.params)
  Ubicacion.findAll({
    where: {    
        Padre: null,
        user: req.params.user}
    })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
  })
};

exports.crear= (req, res) => {
    // Validate request
    if (!req.body.Nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  console.log("creando");
    // Create a Tutorial
    const ubicacion = {
      user: req.body.user,  
      Nombre: req.body.Nombre,
      Padre: req.body.Padre,
      Notas: req.body.Notas,
      Prioridad:req.body.Prioridad
    };
  
    // Save Tutorial in the database
    Ubicacion.create(ubicacion)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };


exports.modificar = (req, res) => {
   


  const id = req.body.id;
    console.log("chan "+ id+" item "+JSON.stringify(req.body));

  Ubicacion.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};


exports.borrar = (req, res) => {
   
  const id = req.params.id;

  Ubicacion.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};


