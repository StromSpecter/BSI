'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Programs.init({
    title: DataTypes.STRING,
    icon: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Programs',
  });
  return Programs;
};