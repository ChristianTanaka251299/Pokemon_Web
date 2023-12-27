const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
require("dotenv").config();
const db = require("./models");
const PORT = process.env.PORT;

const sequelize = new Sequelize("pokemon_advance", "root", "password", {
    host: "localhost",
    dialect: "mysql",
  });

app.get("/", (req, res) => {
  console.log("Here");
  res.sendStatus(500);
  res.send("Hi");
});

// db.sequelize.sync({ alter: true });

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully at port ${PORT}`);
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
});
