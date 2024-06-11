const { users } = require("../../models");
require("dotenv").config();

module.exports = {
  verifyAccount: async (req, res) => {
    const { uid } = req.params;
  
    try {
      const user = await users.findOne({
        where: {
          uid: parseInt(uid),
        },
      });
  
      if (user) {
        await user.update({ verify: true });
        res.redirect(`${process.env.FRONTEND}/login`);
      } else {
        res.status(404).send({
          message: 'User not found',
        });
      }
    } catch (error) {
      res.status(500).send({
        message: 'Internal Server Error',
      });
      console.log('Verification Error:', error);
    }
  },

  getUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await users.findOne({
        where: {
          uid: userId,
        },
      });
      res.status(200).send({
        message: "Succes Get user",
        result,
      });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
};
