const express = require("express");
const session = require("express-session");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const passport = require("./config/passport");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.use(passport.initialize());
app.use(passport.session());

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log(
        "=>  🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", 
        PORT, PORT);
    })
  });