const calculateScore = (time, hp, itemCnt) => {
    var score = 60 / time + hp * 0.6 + itemCnt * 0.1;
    return score;
}

const calculateStar = (levelScore) => {
    var starCnt = 0;
    if(6 < levelScore && levelScore < 9) {
        starCnt = 1;
    }
    else if(9 <= levelScore && levelScore < 12) {
        starCnt = 2;
    }
    else if(12 <= levelScore) {
        starCnt = 3;
    }
    return starCnt;
}
module.exports = {calculateScore, calculateStar}