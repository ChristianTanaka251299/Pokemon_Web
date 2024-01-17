const { users } = require("../../models");
require("dotenv").config();

module.exports = {
  verifyAccount: async (req, res) => {
    const uid = req.params.uid;

    try {
      await users.update(
        { verify: 1 },
        {
          where: {
            uid,
          },
        }
      );
      res.status(200).send({
        message: "Success verify user",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
