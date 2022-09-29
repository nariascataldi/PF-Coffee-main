const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true ,
      allowNull: false,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prod_title: {
      type: DataTypes.STRING
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
        allowNull: true
    }
  },{
    timestamps: false
});
};