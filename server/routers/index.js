const express = require('express');
const userRouters = require("./userRouters")
const favoriteRouters = require("./favoriteRouters")
const friendRouters = require("./friendRouters")

module.exports = {
    userRouters,
    favoriteRouters,
    friendRouters
}