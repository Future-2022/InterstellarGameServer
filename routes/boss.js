const express = require('express')
const router = express.Router()
const Boss = require('../models/Boss')

router.post('/', async (req, res) => {    

    // var bosses = new Boss({
    //     land:"centaurus",
    //     level: "1",
    //     bosses: [
    //         {
    //             boss: "boss2-1",
    //         },
    //     ],
    //     number: "1",
    // });
    // // console.log(bosses);
    // await bosses.save();
    
    const {land, level} = req.body;
    console.log('land', req.body.land);
    console.log('level', req.body.level);
    let find_boss = await Boss.find({ $and: [ {"land":land}, { "level":level} ] });
    var tempArray = [];
    for (const bss of find_boss[0].bosses) {
        tempArray.push(bss);
    }
    return res.json(tempArray);
})
module.exports = router