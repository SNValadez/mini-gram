const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;