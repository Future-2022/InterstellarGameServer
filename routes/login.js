const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const User = require('../models/User')

const { check, validationResult } = require('express-validator')

router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
    ],
    async (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, pass } = req.body
        let user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(pass, user.password);
        console.log(!isMatch);
        if (!user) {
            return res.send('Invalid Credentials')
        }
        else if (!isMatch) {
            return res.send('Password is not match!')
        } else {
            return res.send("Logged In")
        }
    }
)

module.exports = router