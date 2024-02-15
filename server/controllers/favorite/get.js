const { favorites } = require("../../models");
const db = require("../../models");
const { Sequelize } = require("sequelize");
const sequelize = db.sequelize;
require("dotenv").config();

module.exports = {
  getFavorite: async (req, res) => {
    try {
      const { user_id } = req.query;

      const result = await favorites.findAll({
        attributes: ["pokemon_name"],
        where: { user_id },
      });

      res.status(200).send({
        message: `Success get user ${user_id} pokemon lists`,
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getTopFav: async (req, res) => {
    try {
      const result = await sequelize.query(
        "SELECT pokemon_name, COUNT(pokemon_name) AS count FROM favorites GROUP BY pokemon_name ORDER BY count DESC"
      );
      res.status(200).send({
        message: "success get top 5 pokemon",
        result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};
