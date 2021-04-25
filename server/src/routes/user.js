const requireJwtAuth = require('../middleware/requireJwtAuth');

const router = require('express').Router();

router.get('/profile', requireJwtAuth,(req, res) => {
    const user = req.user.toJSON();
    res.status(200).json({user})
})


module.exports = router