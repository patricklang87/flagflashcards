const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { auth } = require('../../middleware/auth');

// User Model
const User = require('../../models/User');

// @route POST api/auth
// @desc Auth user
// @access public
router.post('/', (req, res, next) => {
    const { email, password } = req.body;

    //Simple validation

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields.'})
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User does not exist" });

            //Validate Password

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

                    jwt.sign(
                        { id: user.id },
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    name: user.name,
                                    id: user.id,
                                    email: user.email,
                                    memorized_flags: user.memorized_flags
                                }
                            })
                        }
                    )
                })
        });
});

// @route POST api/auth/user
// @desc Get user data
// @access private
router.get('/', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json({user}))
});

module.exports = router