const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        // autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Client",
      },
      mail: {
        type: DataTypes.STRING,
        // validate: {
        //   isEmail: true,
        // },
        allowNull: false,
        // trim: true,
        // unique: true,
      },
      // pass: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   trim: true,
      // },
      avatar: {
        type: DataTypes.STRING,
      },
      birthday: {
        type: DataTypes.STRING,
      },
      confirm: {
        type: DataTypes.BOOLEAN,
        default: true,
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