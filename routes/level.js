const express = require('express')
const router = express.Router()
const LevelItem = require('../models/LevelItem')

router.post('/', async (req, res) => {

    // var levelitem = new LevelItem({
    //     land: "dorado",
    //     level: "4",
    //     maxScore: "80",
    //     player: "SpaceShip",
    //     maxHp: "20"
    // });    
    // console.log(levelitem);
    // await levelitem.save();
    // console.log(req.body);
    
    const { land, level } = req.body;
    console.log(req.body+"!!!!!!!!!!");
    let item = await LevelItem.find({ $and: [{ "land": land }, { "level": level }] });
    console.log("item--------"+item[0]);
    return res.send(item[0]);
})

module.exports = router