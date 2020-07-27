const { authJwt } = require("../middleware");
const controller = require("../controllers/producto.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 


  //un producto por codigo
  app.get("/api/data/productosid/:productoId",[authJwt.verifyToken], controller.findwebid);
  app.get("/api/data/productosnom/:productoId",[authJwt.verifyToken], controller.findnombre);
  app.get("/api/data/productosbarra/:productoId",[authJwt.verifyToken], controller.findbarra);
  app.post("/api/rosario/", controller.reserva);
 
};
