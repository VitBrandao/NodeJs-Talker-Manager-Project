const fs = require('fs').promises;

const writeTalker = async (req, res) => {
  const { body: newTalker, talkers } = req;
  // console.log(newTalker);
  // console.log(talkers);
  newTalker.id = talkers.length + 1;
  // console.log(newTalker);
  talkers.push(newTalker);
  // console.log(talkers);
  try {
    await fs.writeFile('talker.json', JSON.stringify(talkers));
    res.status(201).json(newTalker);
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeTalker;