const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
     
  // defino el modelo
  sequelize.define("product", {
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sale_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    cost: {
      type: DataTypes.INTEGER
    },
    margin: {
      type: DataTypes.INTEGER
    },
    discount: {
      type:DataTypes.INTEGER,
      defaultValue: 0
    }

  },{
    timestamps: false
});
}
  


