const express = require('express')
const router = express.Router()
//const auth    = require('../../middleware/auth')
const bcrypt = require('bcryptjs')
//const jwt     = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')

const { check, validationResult } = require('express-validator')

//* method    POST
//* route     api/auth
//* desc      Authenticate user & get token
//* access    Public

router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
///        check('password', 'Password is required').exists()
    ],
    async (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body
        let user = await User.findOne({ email })

        if (!user) {
            return res.send('Invalid Credentials')
        }

        else if (password == user.password) {
            return res.send('Invalid Credentials')
        } else {
            return res.send("Logged In")
        }
    }
)

module.exports = router