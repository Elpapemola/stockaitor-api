module.exports = (sequelize, Sequelize) => {

    const ubicaciones=sequelize.models.ubicaciones;
    const productos=sequelize.models.productos;

    const Movimiento = sequelize.define("Movimientos", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          cantidad: {
            type: Sequelize.INTEGER
          },
          user: {
            type: Sequelize.INTEGER
          },
          productoId:{

            type: Sequelize.INTEGER,
            references: {
              model:  productos, // 'Movies' would also work
              key: 'id'
            }
          },
          destino:{

            type: Sequelize.INTEGER
           
          },
          origen:{

            type: Sequelize.INTEGER
           
          },
          tipo:{

            type: Sequelize.STRING
          }


        });

      
  
    return Ubi_stock;
  };
  