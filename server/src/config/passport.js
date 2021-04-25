const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitubStrategy = require('passport-github').Strategy;
const {userModal} = require('../modals/user');


module.exports = function(passport){
    
    passport.serializeUser((user, done) =>{
        console.log('working 22', user._id)
        return done(null, user.id)
    });
    
    passport.deserializeUser(function(id, done){
        console.log('working 66666666666666')
        userModal.findById(id, (err, user) => {
            if(err){
                done(err)
            } else{
                console.log(user)
                return done(null, user)
            }
        })
    });
    
    // Google strategy
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        }, 
        async function(accessToken, refreshToken, profile, done){
            const newUser = {
                provider: profile.provider,
                name: profile.displayName,
                providerId: profile.id,
                profileImage: profile.photos[0].value
            }
            try{
                let user = await userModal.findOne({providerId: profile.id})
                if(user){
                    done(null, user)
                } else{
                    user = await userModal.create(newUser)
                    done(null, user)
                } 
            }
            catch(e){
                console.log(e)
            }
        })
    )
        
    // Github startegy
    passport.use(
        new GitubStrategy({
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: '/auth/github/callback'
        }, 
        function (accessToken, refreshToken, profile, cb){
            return cb(null, profile)
        })
    )
    
    
}