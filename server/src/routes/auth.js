const passport = require('passport')

const router = require('express').Router();


router.get('/', (req, res) => {
    return res.status(200).send("successs")
})

// auth route for google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))


// callback route for google
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/auth', session: true}), 
    (req, res) => {
        res.redirect('http://localhost:3000/auth')
})


module.exports = router