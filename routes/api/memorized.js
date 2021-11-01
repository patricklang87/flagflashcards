const express = require('express');
const router = express.Router();
const { auth } = require('../../middleware/auth');

const User = require('../../models/User');

// @route PATCH api/memorized
// @desc add to the list of known flags
// @access private
router.patch('/', auth, async (req, res, next) => {
    try {
        const response = await User.updateOne({ _id: req.user.id}, { $addToSet : { memorized_flags: req.body.flag }} );
        res.send(response);
    } catch (err) {
        console.log("patch", err);
    }
});

// @route DELETE api/memorized
// @desc remove a country from memorized list
// @access private
router.delete('/:flag', auth, async (req, res, next) => {
    try {
       const response = await User.updateOne({ _id: req.user.id}, { $pull: { memorized_flags: req.params.flag } } );
        res.send(response); 
    } catch (err) {
        console.log("delete", err);
    }
    
});

module.exports = router;