const express = require('express');
const router = express.Router();
const PlayHistory = require('../models/PlayHistory');
const api = require('../control/api');
const { jsonParser } = require('config/parser');

router.post('/',
    async (req, res) => {
        const {userName, land, level, time, hp, itemCnt } = req.body;
        try {
            const levelScore = api.calculateScore(time, hp, itemCnt);
            const starCnt = api.calculateStar(levelScore);
            console.log("---score---" + levelScore);
            const getHistory = await PlayHistory.findOne({ $and: [{ "userName": userName }, { "land": land }, {"level": level}] });
            console.log(getHistory);
            if(!getHistory) {
                let playHistory = new PlayHistory({
                    userName: userName,
                    land: land,
                    level: level,
                    time: time,
                    Hp: hp,
                    itemCnt: itemCnt,
                    levelScore: levelScore,
                    starCnt: starCnt
                });
                await playHistory.save();
                res.json('save_success');
            }
            else {
                if(getHistory.levelScore < levelScore) {
                    await PlayHistory.updateOne({ $and: [{ "userName": userName }, { "land": land }, {"level": level}] }, 
                        {$set:{"time": time, "Hp": hp, "itemCnt": itemCnt, "levelScore": levelScore, "starCnt": starCnt}});
                    res.json('update_success');
                }
                else {
                    res.json('skip_success');
                }
            }            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.post('/getHistory', async(req, res) => {
    const { userName } = req.body;
    try {
        console.log(userName);
        const getHistory = await PlayHistory.find({ "userName": userName });
        const realData = [];
        console.log(getHistory.length);
        getHistory.forEach(element => {
            console.log(element);
            if(element["land"] == "HydraList") {
                if (!realData['HydraList'])
                    realData['HydraList'] = {show: true, cntLevel: 1};
                else {
                    realData['HydraList'] = {show: true, cntLevel: realData['HydraList']['cntLevel']+1}
                }
            } else if (element["land"] == "CentaurusList") {
                if (!realData['CentaurusList'])
                    realData['CentaurusList'] = {show: true, cntLevel: 1};
                else {
                    realData['CentaurusList'] = {show: true, cntLevel: realData['CentaurusList']['cntLevel']+1}
                }
            } else if (element["land"] == "AndromedaList") {
                if (!realData['AndromedaList'])
                    realData['AndromedaList'] = {show: true, cntLevel: 1};
                else {
                    realData['AndromedaList'] = {show: true, cntLevel: realData['AndromedaList']['cntLevel']+1}
                }
            } else if (element["land"] == "DoradoList") {
                if (!realData['DoradoList'])
                    realData['DoradoList'] = {show: true, cntLevel: 1};
                else {
                    realData['DoradoList'] = {show: true, cntLevel: realData['DoradoList']['cntLevel']+1}
                }
            }            
        });    
        
        const events = [];
        if(realData["HydraList"])
            events.push(realData["HydraList"]);
        if(realData["CentaurusList"])
            events.push(realData["CentaurusList"]);
        if(realData["AndromedaList"])
            events.push(realData["AndromedaList"]);
        if(realData["DoradoList"])
            events.push(realData["DoradoList"]);

        console.log(events);
        res.send(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router