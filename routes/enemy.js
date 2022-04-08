const express = require('express')
const router = express.Router()
const Enemy = require('../models/Enemy')

router.post('/', async (req, res) => {    

    // var enemies = new Enemy({
    //     land:"hydro",
    //     level: "2",
    //     enemies: [
    //         {
    //             enemy: "enemy1-2",
    //         },
    //         {
    //             enemy: "Asteroid-1-2",
    //         },
    //     ],
    //     number: "4",
    // });
    // console.log(enemies);
    // await enemies.save();
    
    const {land, level} = req.body;
    let enemy = await Enemy.find({ $and: [ {"land":land}, { "level":level} ] });
    var tempArray = [];
    for (const enm of enemy[0].enemies) {
        tempArray.push(enm);
    }
    return res.json(tempArray);
})
module.exports = router