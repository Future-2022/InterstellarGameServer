const express = require('express')
const router = express.Router()
//const auth    = require('../../middleware/auth')
//const bcrypt = require('bcryptjs')
//const jwt     = require('jsonwebtoken')
//const config = require('config')
const LevelItem = require('../models/LevelItem')

router.post('/', async (req, res) => {

    // var levelitem = new LevelItem({
    //     land: "hydro",
    //     level: "2",
    //     maxScore: "30",
    //     enemy: "bad",
    //     maxHp: '20'
    // });
    
    // console.log(levelitem);
    // await levelitem.save();

    const { land, level } = req.body;
    let item = await LevelItem.find({ $and: [{ "land": land }, { "level": level }] });

    return res.send(item[0]);
}
)

module.exports = router