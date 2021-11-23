const express = require("express");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const exphbs = require("express-handlebars");
const router = express.Router();
const homeRoutes = require("./controllers/home-routes")

const passport = require("passport");
const app = express();

const PORT = process.env.PORT || 3007;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(session({ 
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));
app.use(passport.initialize());
app.use(passport.session());


//app.get("/", function(req, res){
  //res.send("Hello World!")
//})

app.use("/homeRoutes", homeRoutes);


sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log(
        "=>  🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", 
        PORT, PORT);
    })
  });

  module.exports = router;