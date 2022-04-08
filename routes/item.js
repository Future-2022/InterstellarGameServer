const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

router.post('/', async (req, res) => {

    // var Items = new Item({
    //     land: "hydro",
    //     level: "2",
    //     items: [
    //         {
    //             item: "bulletParallel",
    //         },
    //         {
    //             item: "bulletpower",
    //         },
    //         {
    //             item: "bulletSpeed",
    //         },
    //         {
    //             item: "bulletthrough",
    //         },
    //         {
    //             item: "bulletpower",
    //         },
    //         {
    //             item: "fly",
    //         },
    //         {
    //             item: "health",
    //         },
    //         {
    //             item: "shield",
    //         },
    //         {
    //             item: "speed2",
    //         },
    //     ],
    //     number: "4",
    // });
    // console.log(Items);
    // await Items.save();

    const { land, level } = req.body;

    let item = await Item.find({ $and: [{ "land": land }, { "level": level }] });
    console.log("ss"+item[0].number);
    
    var tempArray = [];

    var count;

    for (count=0; count < item[0].number; count++) {
        tempArray.push(item[0].items[count]);
    }

    return res.json(tempArray);
})
module.exports = router