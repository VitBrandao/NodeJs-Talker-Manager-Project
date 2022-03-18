const fs = require('fs').promises;

const readTalkers = async (req, _res, next) => {
    const reading = await fs.readFile('talker.json', 'utf-8');

    req.talkers = JSON.parse(reading);
    
    next();
};

module.exports = readTalkers;
