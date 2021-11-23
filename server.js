const express = require("express");
const routes = require('./controllers'); // Wasn't here before
const sequelize = require("./config/connection");

// express session variables
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const exphbs = require("express-handlebars");
const router = express.Router();

// below line commented out.  I think it is unnecessary
// const homeRoutes = require("./controllers/home-routes")

const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// turn on routes
app.use(routes); //Wasn't here before

// setup handlebars for frontend
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

//below line commented out  I think it is unnecessary
// app.use("/homeRoutes", homeRoutes);

// I have added commeted out code below.  This is how my working server
// was set up.  I don't know if passport made it necessary
// for th code to be different.......
// const sess = {
//   secret: 'Secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log(
        "=>  🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", 
        PORT, PORT);
    })
  });

  module.exports = router;