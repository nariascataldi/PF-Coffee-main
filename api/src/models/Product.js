const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  // defino el modelo
  sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
