const db = require("../models");
const config = require("../config/auth.config");
const Ubicacion = db.ubi_stock;

const Op = db.Sequelize.Op;

ubirepetida = (req, res, next) => {



   Ubicacion.findOne({
        where: {
            [Op.and]:[{
               productoId:req.body.productosId},
              {ubicacionesId:req.body.ubicacionesId}]
            }})
      .then(data => {

        if(data){ 

                
                res.send(data);
               /* res.status(403).send({
                message: "Failed! entrada duplicada!"});*/
        

        }else{

            
             next();
             return;
        } 
      
      })
      .catch(err => {
        console.log(err)
      })
   


}


const check = {
    ubirepetida: ubirepetida,
   
  };
  module.exports =  check;
  