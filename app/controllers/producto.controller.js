const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Producto = db.productos;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


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
