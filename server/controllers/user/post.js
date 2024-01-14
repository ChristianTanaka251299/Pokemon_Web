const { uidGenerator } = require("../../helper/uidGenerator");
const { users } = require("../../models");
const bcrypt = require("bcrypt");
const nodemailer = require("../../helper/nodemailer")
require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, password, verify, email } =
      req.body;
    // const profile_picture = req.file;

    if (password !== verify)
      return res.status(400).send({
        message: "password doesn't match",
      });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const lastRegister = await users.findOne({
      order: [["createdAt", "DESC"]],
    });
    const generateUID = parseInt(uidGenerator(lastRegister.dataValues.id + 1));
    try {
      const [user, created] = await users.findOrCreate({
        where: {
          email: email,
        },
        defaults: {
          first_name: first_name.toLowerCase(),
          last_name: last_name.toLowerCase(),
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

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const getUser = await users.findOne({
        where: {
          email,
        },
      });
      const hashPassword = getUser.dataValues.password;

      const isValid = await bcrypt.compare(password, hashPassword);
      if (!getUser) return res.status(401).send({ message: "User Not Found" });
      if (!isValid) return res.status(401).send({ message: "Wrong Password" });

      const user = {
        firstName: getUser.dataValues.first_name,
        lastName: getUser.dataValues.last_name,
        email: getUser.dataValues.email,
      };

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "10m",
      });
      const refreshToken = await jwt.sign(user, process.env.REFRESH_TOKEN_KEY);

      await users.update(
        { refresh_token: refreshToken },
        {
          where: {
            email: email,
          },
        }
      );
      
      nodemailer.sendMail({
        from: "sender@server.com",
        to: "tanakaalden@gmail.com",
        subject:"testing nodemailer",
        text:"Jika anda menerima email ini maka selamat nodemailernya masuk pak eko"
      })
      res.status(200).send({
        message: "Login Success",
        token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      res.status(400).send({
        message: "Theres an Error",
      });
      console.log("ini errornya", error);
    }
  },

  refreshToken: async (req, res) => {
    const { first_name, last_name, email, refresh_token } = req.body;

    try {
      if (refresh_token === null) return res.status(401);

      const verifyToken = jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_KEY
      );

      if (!verifyToken) return res.status(401);

      const user = {
        first_name,
        last_name,
        email,
      };

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "10m",
      });

      res.status(200).send({
        accessToken: accessToken
      })
    } catch (error) {
      res.send(400).send({
        message: "Theres an Error"
      })
    }
  },
};
