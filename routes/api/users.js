const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access public
router.post('/', (req, res, next) => {
    const {name, email, password} = req.body;

    //Simple validation

    if (!name || !email || !password) {
        return res.send({ success: false, msg: 'Please enter all fields.'})
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.send({ success: false, msg: "User already exists."});

            const newUser = new User({
                name,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {                
                            jwt.sign(
                                { id: user.id },
                                process.env.JWT_SECRET,
                                { expiresIn: 3600},
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        success: true,
                                        token,
                                        user: {
                                            name: user.name,
                                            id: user.id,
                                            email: user.email
                                        }
                                    })
                                } 
                            )
                        })
                })
            }) 
        });
});



module.exports = router;