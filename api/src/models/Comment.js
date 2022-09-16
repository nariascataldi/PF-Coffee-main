const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },{
    timestamps: false
});
};