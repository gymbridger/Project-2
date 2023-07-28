const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Date extends Model {}

Date.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.DateOnly,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "date",
  }
);

module.exports = Date;
