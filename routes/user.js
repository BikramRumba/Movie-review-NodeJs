const router = require('express').Router();

// creating route for user
router.post('/', (req, res) => {
    res.send("checking")
})



module.exports = router;