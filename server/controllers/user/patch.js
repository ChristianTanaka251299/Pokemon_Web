const { users } = require("../../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = {
  updateUserProfile: async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, password, verify, status } = req.body;

    try {
      // If the password is provided, verify it matches the verification password
      let hashPassword = null;
      if (password) {
        if (password !== verify) {
          return res.status(400).send({ message: "Please make sure password is correct" });
        }
        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(password, salt);
      }

      const updateData = {
        first_name,
        last_name,
        status,
      };

      // Add the hashed password to the updateData if it's provided
      if (hashPassword) {
        updateData.password = hashPassword;
      }

      const result = await users.update(updateData, {
        where: {
          id,
        },
      });

      res.status(200).send({
        message: "success update user",
        result,
      });
    } catch (error) {
      res.status(400).send({
        message: "there's an error",
      });
      console.log("Error:", error);
    }
  },
};
