const { uidGenerator } = require("../helper/uidGenerator")
const { users } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, gender, password, verify_password, email } =
      req.body;
    // const profile_picture = req.file;

    if (password !== verify_password)
      return res.status(400).send({
        message: "password doesn't match",
      });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const lastRegister= await users.findOne({
      order:[['createdAt', 'DESC']]
    })
    const generateUID = parseInt(uidGenerator(lastRegister.dataValues.id + 1))
    try {
      const [user, created] = await users.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          first_name,
          last_name,
          gender,
          password: hashPassword,
          email,
          status: "Hello nice to meet you !",
          uid: generateUID,
          verify: false,
        },
      });
      if (created) {
        res.status(200).send({
          message: "Success register new user",
          result: user,
        });
      } else {
        res.status(409).send({
          message: "Email has been registered. Please use a different email.",
        });
      }
    } catch (error) {
      res.status(400).send({
        message: "Theres an error",
      });
      console.log(error);
    }
  },
};
