"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.users, {
        foreignKey: {
          name: "user_id",
        },
      });

    //   Favorite.hasMany(models.role_Favorite_menu_security, {
    //     foreignKey: {
    //       name: "menu_id",
    //     },
    //   });
    }
  }
  Favorite.init(
    {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pokemon_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "favorites",
      paranoid: true,
    }
  );
  return Favorite;
};
