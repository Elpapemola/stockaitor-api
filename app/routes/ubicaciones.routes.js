const { authJwt } = require("../middleware");
const controller = require("../controllers/ubicacion.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });



    app.get("/api/data/ubicacion/:user",[authJwt.verifyToken], controller.todas);

    app.get("/api/data/ubicaciond/",[authJwt.verifyToken], controller.todasd);

    app.get("/api/data/ubicacionn/:id",[authJwt.verifyToken], controller.buscar);

    app.get("/api/data/padres/:user",[authJwt.verifyToken], controller.buscarp);

    app.post("/api/data/ubicacion",[authJwt.verifyToken], controller.crear);
   
    app.put("/api/data/ubicacion/:id",[authJwt.verifyToken], controller.modificar);

    app.delete("/api/data/ubicacion/:id",[authJwt.verifyToken], controller.borrar);
  

 
};
