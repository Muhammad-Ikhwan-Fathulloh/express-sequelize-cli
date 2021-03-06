'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_todo_lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tbl_users, {
        foreignKey : 'createdBy',
      })
    }
  };
  tbl_todo_lists.init({
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true,
      allowNull: false,
      autoIncrement: true
    },
    name_todo: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    desc_todo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tbl_todo_lists',
  });
  return tbl_todo_lists;
};