"use strict";
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    "List",
    {
      list_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      personal_rating: {
        type: Sequelize.INTEGER
      }
    },
    {}
  );
  List.associate = function(models) {
    // associations can be defined here
  };
  return List;
};