const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    detail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment: {
        type:DataTypes.STRING,
        allowNull: false
    },
    paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    delivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  });
};