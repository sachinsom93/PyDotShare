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
        const token = req.user.generateJWT()
        res.cookie('x-auth-cookie', token)
        res.redirect('http://localhost:3000/auth')
    },
)

// Github auth
router.get('/github',
    passport.authenticate('github')
)

// Github auth callback
// Google auth callback
router.get(
    '/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/',
        session: false
    }),
    (req, res) => {
        const token = req.user.generateJWT()
        res.cookie('x-auth-cookie', token)
        res.redirect('http://localhost:3000/auth')
    },
)


router.get('/logout', (req, res) => {
    if(req.user){
        req.logout()
    }
    res.json({
        success: true,
        msg: 'user logout'
    })
})
module.exports = router