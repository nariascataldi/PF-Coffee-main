const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("provider", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false,
      unique: true
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CUIT: {
      type: DataTypes.STRING,
      allowNull: false
    },
    disable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
};