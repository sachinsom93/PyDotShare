const requireJwtAuth = require('../middleware/requireJwtAuth');

const router = require('express').Router();

router.get('/profile', requireJwtAuth,(req, res) => {
    const user = req.user.toJSON();
    return res.status(200).send({
        success: true,
        msg: user
    })
})


module.exports = router