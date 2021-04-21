const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitubStrategy = require('passport-github').Strategy;

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, 
        function(accessToken, refreshToken, profile, cb){
            console.log(profile)
            cb(null, profile)
        }    
    )
)
