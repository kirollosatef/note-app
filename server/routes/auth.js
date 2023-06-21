const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      // Check if user already exists in our DB
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // already have the user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our DB
          new User({
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            profileImage: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log("created new user: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

// Google Login Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Google Callback Route (resiving the data from google)
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failure",
    successRedirect: "/dashboard",
  })
);

router.get("/login-failure", (req, res) => {
  res.send("Failed to authenticate..");
});

// presist user data after successful authentication
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// presist user data from session.
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Destroy session on logout
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("Error logging out");
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
