module.exports = (sequelize, DataType) => {

    const Cruces = sequelize.define('Cruces', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      ip: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    });
  

    return Cruces;
  };