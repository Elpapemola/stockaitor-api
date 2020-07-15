module.exports = (sequelize, Sequelize) => {

    const ubicaciones=sequelize.models.ubicaciones;
    const productos=sequelize.models.productos;

    const Ubi_stock = sequelize.define("ubi_stock", {
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
          },ubicacionesId:{

            type: Sequelize.INTEGER,
            references: {
              model: ubicaciones, // 'Movies' would also work
              key: 'id'
            }
          }


        });

      
  
    return Ubi_stock;
  };
  