const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get(`/`, async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.post(`/`, async (req, res) => {
    const user = new User(
        {
            name: req.body.name,
            last_name: req.body.last_name, 
            username: req.body.username, 
            age: req.body.age,
            password: bcrypt.hashSync(req.body.password, 10)
        }
    )
    user = await user.save();

    if(!user)
    return res.status(400).send('user created!')
    res.send(user);
});

module.exports = router;