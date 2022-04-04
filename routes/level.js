const express = require('express')
const router = express.Router()
//const auth    = require('../../middleware/auth')
//const bcrypt = require('bcryptjs')
//const jwt     = require('jsonwebtoken')
//const config = require('config')
const LevelItem = require('../models/LevelItem')

router.post('/', async (req, res) => {

    // var items = new LevelItem({
    //     land:"hydro",
    //     level:"1",
    //     maxScore:"20",
    //     enemy:"bad",
    //     item:"weapon",
    //     maxHp: "20"
    // });
    // console.log("items");
    // await items.save();
    console.log("post");
    const { land, level } = req.body;
    console.log(req.body)
    let item = await LevelItem.find({ $and: [ {"land":land}, { "level":level} ] });
    
    console.log(item);
    return res.send(item[0]);
});

module.exports = router