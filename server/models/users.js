"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.favorites, {
        foreignKey: {
          name: "users_id",
        },
      });
      User.hasMany(models.friends, {
        foreignKey: {
          name: "users_id",
        },
      });


    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: DataTypes.STRING,
      profile_picture: DataTypes.BLOB,
      gender: DataTypes.ENUM("male", "female"),
    },
    {
      sequelize,
      modelName: "users",
      paranoid: true,
    }
  );
  return User;
};
