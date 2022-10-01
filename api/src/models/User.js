const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

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