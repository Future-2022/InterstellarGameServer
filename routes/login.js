const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const User = require('../models/User')

const { check, validationResult } = require('express-validator')

router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
    ],
    async (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { name, pass } = req.body
        let user = await User.findOne({ name:name });

        if (user == null) {
            return res.send('Cannot find user')
        }
        else {
            const isMatch = await bcrypt.compare(pass, user.password);
            if(!isMatch)
                return res.send('Password is not match!')
            else
                return res.send("Logged In")
        }
    }
)

module.exports = router