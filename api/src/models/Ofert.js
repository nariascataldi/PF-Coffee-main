const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
     
  // defino el modelo
  sequelize.define("ofert", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,  
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    disable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    sale: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dateStart: {
      type: DataTypes.STRING
    },
    dateEnd: {
      type: DataTypes.STRING
    }
  },{
    timestamps: false
});
}