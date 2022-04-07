const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const config = require('config')

const { check, validationResult } = require('express-validator')

const User = require('../models/User')

//* method    POST
//* route     api/users
//* desc      Register new user
//* access    Public

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
        const { name, email } = req.body;
        let password = req.body.pass;
        console.log(`password`+password);
        console.log(req.body);
        //try {
        let user = await User.findOne({ email });
        if (user) {
            return res.send('exist');
        } else {

            let tm = Date.now();
            
            user = new User({
                name,
                email,
                password,
                tm
            })
            await user.save();
            res.send("Registered");
        }
        //catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        //}
    })

module.exports = router