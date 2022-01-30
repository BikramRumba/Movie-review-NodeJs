const router = require('express').Router();
const User = require('../models/User');

// creating route for user
router.post('/', (req, res) => {
     const user  = new User({
        name:req.body.name,
        email:req.body.email
     });
     const savedUser = user.save()
     .then(data =>{
         res.json(data);
     })
     .catch(error => {
         res.json(error);
     })
});


// Getting the user from the database system with given id
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(error){
        res.json(error);
    }

});




module.exports = router;