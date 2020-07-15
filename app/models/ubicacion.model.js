module.exports = (sequelize, Sequelize) => {
    const Ubicaciones = sequelize.define("ubicaciones", {

    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user: {
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Padre: {
        type: Sequelize.INTEGER
      },
      Notas: {
        type: Sequelize.STRING
      },
      Prioridad: {
        type: Sequelize.INTEGER
      }

    },

    );
  
    return Ubicaciones;
  };
  