const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

const User = require("./models/admin");
const config = require("./config");

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
  return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

passport.use(
  new jwtStrategy(opts, (jwt_payload, done) => {
    console.log("JWT payload: ", jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (user, err) => {
      if (err) {
        return done(err, flase);
      } else if (user) {
        return done(null, user);
      } else {
        return done(null, flase);
      }
    });
  })
);

passport.authenticate("jwt", { session: false });

exports.verifyAdmin = function(req, res, next) {
  User.findOne({ _id: req.user._id })
    .then(
      user => {
        if (user.admin) {
          next();
        } else {
          var err = new Error(
            "You are not authorised to perform this operation"
          );
          err.status = 403;
          return next(err);
        }
      },
      err => {
        next(err);
      }
    )
    .catch(err => next(err));
};
