const express = require('express')
const router = express.Router()
const Boss = require('../models/Boss')

router.post('/', async (req, res) => {    

    // var bosses = new Boss({
    //     land:"hydro",
    //     level: "2",
    //     bosses: [
    //         {
    //             boss: "boss1-2",
    //         },
    //     ],
    //     number: "1",
    // });
    // console.log(bosses);
    // await bosses.save();
    
    const {land, level} = req.body;
    let find_boss = await Boss.find({ $and: [ {"land":land}, { "level":level} ] });
    var tempArray = [];
    for (const bss of find_boss[0].bosses) {
        tempArray.push(bss);
        console.log("boss---"+tempArray);
    }
    return res.json(tempArray);
})
module.exports = router