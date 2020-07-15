
module.exports = (sequelize, Sequelize) => {
    const Productos = sequelize.define("productos", {

    
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Codigo: {
        type: Sequelize.INTEGER
      },
      Barra: {
        type: Sequelize.INTEGER
      },
      Autor: {
        type: Sequelize.STRING
      },
      Editorial: {
        type: Sequelize.STRING
      },
      Marca: {
        type: Sequelize.STRING
      },
      Precio: {
        type: Sequelize.DOUBLE
      },
      Iva: {
        type: Sequelize.INTEGER
      },
      Familia: {
        type: Sequelize.STRING
      },
      Fabricante: {
        type: Sequelize.STRING
      },
      Estado: {
        type: Sequelize.STRING
      },
      Nserie: {
        type: Sequelize.STRING
      },
      Tematica: {
        type: Sequelize.STRING
      }

    });
  
    return Productos;
  };
  