const { favorites } = require("../../models");
require("dotenv").config();

module.exports = {
  addFavorite: async (req, res) => {
    try {
      const { user_id, pokemon_name } = req.body;

      const result = await favorites.findOrCreate({
        where: { user_id, pokemon_name },
        default:{
            user_id,
            pokemon_name
        }
      });

      res.status(200).send({
        message: `Success add ${pokemon_name} to user ${user_id}`,
        data: result
      })
    } catch (error) {
        console.log(error)
    }
  },
};
