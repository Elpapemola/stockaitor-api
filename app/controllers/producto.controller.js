const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Producto = db.productos;
const Reserva = db.reserva;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.reserva = (req, res) => {
   // Validate request
   /*console.log("body:"+JSON.stringify(req.body))
   if (!req.body.Nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/
  // Create a Tutorial
  const resreva = {
    
      Nombre:req.body.Nombre,
      Telefono:req.body.Telefono,
      Curso:req.body.Curso,
      Observaciones:req.body.Observaciones,
  
  };

  
  Reserva.create(reserva)
        .then(data => {
        //  res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the reserva."
          });
        });


  // Save Tutorial in the database

}

exports.findwebid = (req, res) => {
   
  Producto.findAll({
      where: {
        [Op.or]:[
        
          {Nombre: {[Op.like]: `%${req.params.productoId}%`}},
          {Codigo: {[Op.like]: `%${req.params.productoId}%`}},
          {Barra: {[Op.like]: `%${req.params.productoId}%`}},
          {Autor: {[Op.like]: `%${req.params.productoId}%`}}
       ]
        },limit: 20
      })
    .then(data => {

     
      res.send(data);
    })
    .catch(err => {
 
      console.log(err)
    })
  };

exports.findnombre = (req, res) => {

    Producto.findAll({
      where: {
        [Op.or]:[{
          Nombre: req.params.productoId},
          {Autor: req.params.productoId}]
        }
      })
    .then(data => { 
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    })
  };

exports.findbarra= (req, res) => {

    Producto.findOne({
      where: 
          {Barra:  {[Op.like]: `${req.params.productoId}`}}
        
      })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    })
};
