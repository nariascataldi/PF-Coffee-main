const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

<<<<<<< HEAD
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
=======
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
>>>>>>> 1cca3623956201153c73c4084bc813b1261454ad
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
        trim: true,
        unique: true,
        primaryKey: true,
      },
      pass: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
      },
      avatar: {
        type: DataTypes.TEXT,
      },
      birthday: {
        type: DataTypes.STRING,
      },
      confirm: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      disable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      basket: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};