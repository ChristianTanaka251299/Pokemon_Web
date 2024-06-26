"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Friends.belongsTo(models.users, {
        foreignKey: {
          name: "user_id",
        },
      });
    }
  }
  Friends.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friend_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "friends",
      paranoid: true,
    }
  );
  return Friends;
};
