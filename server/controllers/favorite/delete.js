const { favorites } = require("../../models");
require("dotenv").config();

module.exports = {
  deleteFavorite: async (req, res) => {
    try {
      const { user_id, pokemon_name } = req.query;

      const result = await favorites.destroy({
        where: { user_id, pokemon_name },
      });

      res.status(200).send({
        message: `Success delete user ${user_id}'s, ${pokemon_name}`,
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
};