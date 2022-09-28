const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,  
      allowNull: false,  
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Client",
      },
      mail: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      pass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.TEXT,
      },
      birthday: {
        type: DataTypes.STRING,
      },
      disable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      basket: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};