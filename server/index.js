const express = require("express");
const { Sequelize } = require("sequelize");
const db = require("./models");
const cors = require("cors");
const { join } = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const { userRouters, favoriteRouters, friendRouters } = require("./routers");

const sequelize = new Sequelize("pokemon_advance", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
app.use(express.json());
app.use(cors());

app.use("/static", express.static(join(__dirname, "./", "public")));
app.get("/", (req, res) => {
  res.status(200).send("connected successfully");
});

app.use("/user", userRouters);
app.use("/favorite", favoriteRouters);
app.use("/friend", friendRouters)

// db.sequelize.sync({ alter: true });

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully at port ${PORT}`);
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
});
