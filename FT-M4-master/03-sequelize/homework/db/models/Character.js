const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Character', {
    code:{
      type: DataTypes.STRING(5),
      primaryKey: true,
      allowNull: false
    },
    name:{
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    age:{
      type: DataTypes.INTEGER
    },
    race:{
      type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
      defaultValue: "Other"
    },
    hp:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    mana:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date_added:{
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    }

  },{timestamps: false}
  )
}




