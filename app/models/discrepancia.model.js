module.exports = (sequelize, Sequelize) => {
    const productos=sequelize.models.productos;

    const Discrepancia = sequelize.define("discrepancias", {
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
          ubicacionID:{

            type: Sequelize.INTEGER

          },
          tipo:{

            type: Sequelize.STRING

          }

    });
  
    return Discrepancia;
  };