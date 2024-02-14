const { favorites } = require("../../models");
require("dotenv").config();

module.exports = {
  getFavorite: async (req, res) => {
    try {
      const { user_id } = req.query;

      const result = await favorites.findAll({
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
};
