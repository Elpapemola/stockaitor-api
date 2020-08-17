const config = require("../config/db.config.js");

const Sequelize = require("sequelize");



console.log("pasando host: "+config.HOST);
console.log("pasando user: "+config.USER);
console.log("pasando pass: "+config.PASSWORD);
console.log("pasando puerto: "+config.PORT);


const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    logging: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.productos = require("../models/producto.model.js")(sequelize, Sequelize);
db.ubicaciones = require("../models/ubicacion.model.js")(sequelize, Sequelize);
db.ubi_stock = require("../models/ubi_stock.model")(sequelize, Sequelize);
db.reserva = require("../models/reserva.model")(sequelize, Sequelize);

db.mensajes = require("../models/mensaje.model.js")(sequelize, Sequelize);
db.devoluciones = require("../models/devolucion.model.js")(sequelize, Sequelize);
db.discrepancias= require("../models/discrepancia.model")(sequelize, Sequelize);
db.movimientos = require("../models/movimiento.model")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});


db.productos.hasMany(db.ubi_stock);
db.ubi_stock.belongsTo(db.productos);



 



////--



db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
