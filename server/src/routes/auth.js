const passport = require('passport')
const router = require('express').Router();


// auth route for google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))


// callback route for google
router.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect: `http://localhost:3000/auth`,
        failureRedirect: `http://localhost:3000/auth`,
        session: true
    })
)


// auth route for github
router.get('/github', passport.authenticate('github', { scope: ['profile']}))

// callback route for github
router.get('/github/callback', 
    passport.authenticate('github', {failureRedirect: `${process.env.USER_CLIENT_BASE_URL}/auth`, session: true}),
    (req, res) => {
    req.logIn(req.user, (err) => {
        if(err){
            console.log(err)
        } else{
            return res.redirect(`${process.env.USER_CLIENT_BASE_URL}/home`)
        }
    })
})

module.exports = router