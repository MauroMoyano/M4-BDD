const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name:{
      type: DataTypes.STRING(50),
      unique: "name_manacost",
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      // allowNull: false
    },
    mana_cost:{
      type: DataTypes.FLOAT,
      unique: "name_manacost",
      allowNull: false
    },
  })
}