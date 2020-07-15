const { authJwt } = require("../middleware");
const { check } = require("../middleware");
const controller = require("../controllers/ubi_stock.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });



    app.get("/api/data/stock/:user",[authJwt.verifyToken], controller.todosuser);


    app.get("/api/data/stocktotal/:id",[authJwt.verifyToken], controller.total);

    app.get("/api/data/stock/",[authJwt.verifyToken], controller.todo);

   app.get("/api/data/stockt/:id",[authJwt.verifyToken], controller.todouna);

    app.get("/api/data/stockp/:id",[authJwt.verifyToken], controller.producto);

    app.get("/api/data/stocki/:id",[authJwt.verifyToken], controller.id);

    app.post("/api/data/stock",[authJwt.verifyToken],[check.ubirepetida], controller.crear);
   
    app.put("/api/data/stock/:id",[authJwt.verifyToken], controller.modificar);

    app.delete("/api/data/stock/:id",[authJwt.verifyToken], controller.borrar);
  
 
};
