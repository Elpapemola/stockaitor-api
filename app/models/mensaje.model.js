module.exports = (sequelize, Sequelize) => {

    const Mensaje = sequelize.define("mensajes", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          origen: {
            type: Sequelize.INTEGER
          },
          destino: {
            type: Sequelize.INTEGER
          },
          mensaje:{

            type: Sequelize.STRING
           
          },
          tipo:{

            type: Sequelize.STRING

          },
          estado:{

            type: Sequelize.STRING

          }

    });
  
    return Mensaje;
  };