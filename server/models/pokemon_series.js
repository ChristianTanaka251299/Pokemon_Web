"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemon_Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemon_Series.belongsTo(models.series, {
        foreignKey: {
          name: "series_id",
        },
      });
    }
  }
  Pokemon_Series.init(
    {
      series_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      series_1: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      series_2: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "pokemon_series",
      paranoid: true,
    }
  );
  return Pokemon_Series;
};
