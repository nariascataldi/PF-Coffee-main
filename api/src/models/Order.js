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
   
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    },
    payment: {
        type:DataTypes.STRING,
        defaultValue: "Mercado Pago",
        allowNull: false
    },
    paid: {
        type: DataTypes.STRING,
        defaultValue: "Pending"
    },
    delivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    total: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  },{
    timestamps: false
});
};