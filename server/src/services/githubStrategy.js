const passport = require('passport');
const {Strategy} = require('passport-github');
const User = require('../modals/user');

const serverUrl = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV


const githubStrategy = new Strategy(
    {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${serverUrl}${process.env.GITHUB_CALLBACK_URL}`,
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Email will be primary key
            const oldUser = await User.findOne({email: profile._json.email})
            if(oldUser){
                return done(null, oldUser)
            }
        } catch (error) {
            console.log(error)
        }

        try {
            const newUser = await new User({
                provider: profile.provider,
                googleId: profile.id,
                username: profile.username,
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

passport.use(githubStrategy)