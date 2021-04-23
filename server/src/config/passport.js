const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitubStrategy = require('passport-github').Strategy;

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})


// Google strategy
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    }, 
        function(accessToken, refreshToken, profile, cb){
            console.log(profile._json)
            cb(null, profile)
        }    
    )
)

// Github startegy
passport.use(
    new GitubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/auth/github/callback'
    }, 
    function (accessToken, refreshToken, profile, cb){
        console.log(profile)
        cb(null, profile)
    })
)