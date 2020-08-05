
const db = require("../models");
const config = require("../config/auth.config");
const { QueryTypes } = require('sequelize');


const Ubicaciones = db.ubicaciones;
const Producto = db.productos;
const  Ubi_stock =db.ubi_stock;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



exports.todo = (req, res) => {
   
    Ubi_stock.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    })
};



exports.todosuser= (req, res) => {



        Ubi_stock.findAll({
            where: {    
                user: req.params.id }
            })
        .then(data => {

        res.send(data);
        })
        .catch(err => {
        console.log(err)
        })
        
}; 
exports.todouna = (req, res) => {

   console.log("buscando; "+JSON.stringify(req.params))
    Ubi_stock.findAll({
      where: {    
          ubicacionesId: req.params.id },include:{model:Producto}
      


      })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    })
};

exports.producto = (req, res) => {
  

        Ubi_stock.findAll({    

        

          include:[
            {
              model:Producto, 
             
              where: {
                [Op.or]:[
                
                  {Nombre: {[Op.like]: `%${req.params.id}%`}},
                  {Codigo: {[Op.like]: `%${req.params.id}%`}},
                  {Barra: {[Op.like]: `%${req.params.id}%`}},
                  {Autor: {[Op.like]: `%${req.params.id}%`}}
               ]
                }
              }

          ]}).then(data => {
        
      res.send(data);
    })
    .catch(err => {
  
      console.log(err)
    })
};

exports.id = (req, res) => {
   
  Ubi_stock.findAll({where: {productoId:req.params.id }
   } 
   ).then(data => {
 res.send(data);
})
.catch(err => {
 console.log(err)
})
};





exports.crear= (req, res) => {
    // Validate request
    if (!req.body.productosId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a Tutorial
    const ubi_stock = {
      
        productoId:req.body.productosId,
        ubicacionesId:req.body.ubicacionesId,
        user:req.body.user,
        cantidad:req.body.cantidad,
    
    };

    
        Ubi_stock.create(ubi_stock)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
  
  
    // Save Tutorial in the database
  }



  

exports.total = (req, res) => {
   
  const id = req.params.id;

  console.log("pidiendo total de "+id)
  //return ;
  
  Ubi_stock.count({
    where: {
       ubicacionesId:id
       
    }
 }).then(data => {

  res.send(data.toString());
 })
 .catch(err => {
  console.log(err)
 })
 



}

exports.modificar = (req, res) => {
   


  const id = req.body.id;
  

    Ubi_stock.update(req.body, {
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


  Ubi_stock.destroy({
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


