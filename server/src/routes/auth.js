const router = require('express').Router();
const passport = require('passport');


// Google auth
router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

// Client route
const clientUrl = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV


// Google auth callback
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        session: false
    }),
    (req, res) => {
        console.log(clientUrl)
        const token = req.user.generateJWT()
        res.cookie('x-auth-cookie', token)
        res.redirect('http://localhost:3000/auth')
    },
)

module.exports = router