const passport = require('passport');
const {Strategy, ExtractJwt} = require('passport-jwt');

const User = require('../modals/user');

const jwtLogin = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // jwtFromRequest: ExtractJwt.fromHeader('x-auth-cookiew'),
        secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, done) => {
        try{
            const user = await User.findById(payload.id);
            if(user){
                done(null,user)
            } else{
                done(null, false)
            }
        } catch(err){
            done(err, false)
        }
    } 
)

passport.use(jwtLogin)