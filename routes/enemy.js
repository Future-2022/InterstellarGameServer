const express = require('express')
const router = express.Router()
//const auth    = require('../../middleware/auth')
//const bcrypt = require('bcryptjs')
//const jwt     = require('jsonwebtoken')
//const config = require('config')
const Enemy = require('../models/Enemy')

router.post('/', async (req, res) => {

    

    /*var enemies = new Enemy({
        land:"hydro",
        level: "1",
        enemies: [
            {
                enemy: "Enemy",
            },
            {
                enemy: "Asteroid",
            },
        ],
        number: "2",
    });
    console.log(enemies);
    await enemies.save();
    */
    const {land, level} = req.body;
    //console.log(req.body)
    let enemmy = await Enemy.find({ $and: [ {"land":land}, { "level":level} ] });
    var rr = [];
    for (const enm of enemmy[0].enemies) {
      //  console.log(enm);
        rr.push(enm);
      }
    console.log("Bullet---", rr);
    return res.json(rr);
})
module.exports = router