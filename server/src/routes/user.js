const router = require('express').Router();

router.get('/profile', (req, res) => {
    console.log(req.isAuthenticated())
    if(req.user){
        return res.status(200).json({
            success: true, 
            msg: user
        })
    } else{
        return res.status(400).json({
            success: false,
            msg: 'User not authorized'
        })
    }
})


module.exports = router