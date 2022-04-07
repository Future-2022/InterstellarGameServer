const express = require('express')
const router = express.Router()
const Bullet = require('../models/Bullet')

router.get('/', async (req, res) => {    

    // var items = new Bullet({
    //     type:"player",
    //     name: "bulletspeed1",
    //     force:"4",
    //     damage: "1"
    // });
    // console.log("items");
    // await items.save();

    const type = req.query.tt;
    let bullet = await Bullet.find({"type": type});
    return res.json({first: bullet[0].name, sec: bullet[1].name});
})

module.exports = router