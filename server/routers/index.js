const express = require('express');
const userRouters = require("./userRouters")
const favoriteRouters = require("./favoriteRouters")

module.exports = {
    userRouters,
    favoriteRouters
}