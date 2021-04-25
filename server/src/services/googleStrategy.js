const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const User = require('../modals/user');

const serverUrl = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV

// Google strategy
const googleStrategy = new Strategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${serverUrl}${process.env.GOOGLE_CALLBACK_URL}`,
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const oldUser = await User.findOne({email: profile._json.email})
            if(oldUser){
                return done(null, oldUser)
            }
        } catch (error) {
            console.log(error)
        }

        try {
            const newUser = await new User({
                provider: 'google',
                googleId: profile.id,
                username: `user${profile.id}`,
                email: profile._json.email,
                name: profile.displayName,
                avatar: profile.photos[0].value
            }).save();
            done(null, newUser)
        } catch (error) {
            console.log(error)
        }
    }
)

passport.use(googleStrategy);