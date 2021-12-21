// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;

// var db = require("../models");

// passport.use(new LocalStrategy(
  
//   {
//     usernameField: "email"
//   },
//   function(email, password, done) {
//     db.User.findOne({
//       where: {
//         email: email
//       }
//     }).then(function(dbUser) {
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Not a valid email!"
//         });
//       }
      
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Not a valid password!"
//         });
//       }
//       return done(null, dbUser);
//     });
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// module.exports = passport;

// const passport = require('passport') 
// const OAuthStrategy = require('passport-oauth').OAuthStrategy;

// passport.use('provider', new OAuthStrategy({
//     requestTokenURL: 'https://www.provider.com/oauth/request_token',
//     accessTokenURL: 'https://www.provider.com/oauth/access_token',
//     userAuthorizationURL: 'https://www.provider.com/oauth/authorize',
//     consumerKey: '123-456-789',
//     consumerSecret: 'shhh-its-a-secret',
//     callbackURL: 'https://www.example.com/auth/provider/callback'
//   },
//   function(token, tokenSecret, profile, done) {
//     User.findOrCreate("...", function(err, user) {
//       done(err, user);
//     });
//   }
// ));

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
require('dotenv').config();

 
passport.use(new GoogleStrategy({
    consumerKey: process.env.GOOGLE_CONSUMER_KEY,
    consumerSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:3007/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));

module.exports = passport;