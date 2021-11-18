const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const passport = require("./config/passport");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());