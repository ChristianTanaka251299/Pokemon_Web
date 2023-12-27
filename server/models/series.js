"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Series.hasMany(models.pokemon_series, {
        foreignKey: {
          name: "series_id",
        },
      });
    }
  }
  Series.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.BLOB,
        // allowNull: false,
      },
     
    },
    {
      sequelize,
      modelName: "series",
      paranoid: true,
    }
  );
  return Series;
};
