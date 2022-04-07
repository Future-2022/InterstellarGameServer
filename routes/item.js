const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

router.post('/', async (req, res) => {

    // var Items = new Item({
    //     land: "hydro",
    //     level: "1",
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
    //     number: "2",
    // });
    // console.log(Items);
    // await Items.save();

    const { land, level } = req.body;

    let item = await Item.find({ $and: [{ "land": land }, { "level": level }] });
    console.log("ss"+item[0].number);
    
    var rr = [];
    var i;
    //for (const itm of item[0].items) {
        for (i=0; i < item[0].number; i++) {
            rr.push(item[0].items[i]);
            console.log(item[0].items[i]);
        }
      //  break;
    //}
    console.log("Bullllet---", rr);
    return res.json(rr);
})
module.exports = router