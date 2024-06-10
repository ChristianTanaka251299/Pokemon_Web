const { uidGenerator } = require("../../helper/uidGenerator");
const { users } = require("../../models");
const bcrypt = require("bcrypt");
const nodemailer = require("../../helper/nodemailer");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const endpoint = process.env.ENDPOINT;

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, password, verify, email } = req.body;
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
        nodemailer.sendMail({
          from: "sender@server.com",
          to: email,
          subject: "Register to Pokémon",
          html: `
          <h1>Welcome to Pokémon</h1>
          <p>Thank you ${first_name} for registering with Pokémon.
            To complete the registration process and activate your account, we require confirmation from you.
          </p>
    
          <p>
            Please click the verification link below to confirm your registration
          </p>
          <a href="${endpoint}/user/verify_user/${generateUID}">Verification Link</a> 
    
          <p>Make sure to verify your account to access all the features of our service.</p>
    
          <p>Best regards,</p>
          <p>Pokémon Support Team</p>
          <p>Christian Tanaka</p>`,
        });
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
      console.log("ini errornya", error);
    }
  },

  profilePicture: async (req, res) => {
    const id = req.params.id; // Pastikan id diambil dari body request
    const profilePicture = req.file;

    if (!id) {
      return res.status(400).send({ message: "User ID is required" });
    }

    if (!profilePicture) {
      return res.status(400).send({ message: "Profile picture is required" });
    }

    try {
      const updateProfile = await users.update(
        { profile_picture: profilePicture.filename }, // Simpan nama file
        { where: { id } }
      );
      res.status(200).send({
        message: "Success update profile picture",
        result: updateProfile,
      });
    } catch (error) {
      res.status(400).send({
        message: "There's an error",
        error: error.message,
      });
      console.log("ini errornya", error);
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
        id: getUser.dataValues.id,
        firstName: getUser.dataValues.first_name,
        lastName: getUser.dataValues.last_name,
        uid: getUser.dataValues.uid,
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

      res.status(200).send({
        message: "Login Success",
        token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      res.status(400).send({
        message: "Theres an Error",
      });
      console.log("ini errornya", error)
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
        accessToken: accessToken,
      });
    } catch (error) {
      res.send(400).send({
        message: "Theres an Error",
      });
    }
  },
};
