const express = require('express')
const router = express.Router()
const Enemy = require('../models/Enemy')

router.post('/', async (req, res) => {    

    // var enemies = new Enemy({
    //     land:"hydro",
    //     level: "1",
    //     enemies: [
    //         {
    //             enemy: "Enemy",
    //         },
    //         {
    //             enemy: "Asteroid",
    //         },
    //     ],
    //     number: "2",
    // });
    // console.log(enemies);
    // await enemies.save();
    
    const {land, level} = req.body;
    let enemy = await Enemy.find({ $and: [ {"land":land}, { "level":level} ] });
    var tempArray = [];
    for (const val of enemy[0].enemies) {
        tempArray.push(val);
    }
    return res.json(tempArray);
})
module.exports = router