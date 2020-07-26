module.exports = (sequelize, Sequelize) => {
    const Reserva = sequelize.define("reservas", {
      Nombre: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.INTEGER
      },
      Curso: {
        type: Sequelize.STRING
      },
      Observaciones: {
        type: Sequelize.STRING
      }
    });
  
    return Reserva;
  };
  