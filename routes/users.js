const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const config = require('config')

const { check, validationResult } = require('express-validator')

const User = require('../models/User')

router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
    ],
    async (req, res) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.send( errors.array() );
        }
        console.log(req.body);
        const { name, email } = req.body;
        let password = req.body.pass;
        console.log('pass--', password);
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.send('exist');
            } else {

                let tm = Date.now();
                const salt = await bcrypt.genSalt(10);
                userPassword = await bcrypt.hash(password, salt);
                user = new User({
                    name,
                    email,
                    password:userPassword,
                    tm
                })
                await user.save();
                res.send("Registered");
            }
        }
        catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    })

module.exports = router