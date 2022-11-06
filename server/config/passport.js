const usermodel = require("../models/User");

const JwtStrategy = require("passport-jwt").Strategy ;
const   ExtractJwt = require("passport-jwt").ExtractJwt;
let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "some secret.";

const jwtpass = (passport) => {
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      usermodel.findById(jwt_payload._id, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
//
module.exports = jwtpass;
