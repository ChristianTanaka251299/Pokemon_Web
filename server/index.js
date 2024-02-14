const express = require("express");
const { Sequelize } = require("sequelize");
const db = require("./models");
const cors = require("cors")
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;



const { userRouters, favoriteRouters } = require("./routers")

const sequelize = new Sequelize("pokemon_advance", "root", "password", {
    host: "localhost",
    dialect: "mysql",
  });
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.sendStatus(500);
  res.send("Hi");
});

app.use("/user", userRouters)
app.use("/favorite", favoriteRouters)

// db.sequelize.sync({ alter: true });

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully at port ${PORT}`);
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
});
