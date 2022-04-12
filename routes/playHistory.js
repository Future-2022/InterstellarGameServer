const express = require('express');
const router = express.Router();
const PlayHistory = require('../models/PlayHistory');

router.post('/',
    async (req, res) => {

        const { land, level, time, hp } = req.body;
        try {
            let playHistory = new PlayHistory({
                land: land,
                level: level,
                time: time,
                Hp: hp,
            });
            await playHistory.save();
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.get('/', async(req, res) => {

});

module.exports = router