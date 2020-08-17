module.exports = (sequelize, Sequelize) => {

    const productos=sequelize.models.productos;

    const Devolucion = sequelize.define("devoluciones", {
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
          estado:{

            type: Sequelize.STRING,
        
          }


        });

      
  
    return Devolucion;
  };
  