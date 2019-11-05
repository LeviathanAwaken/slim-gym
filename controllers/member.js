const Member = require('../models').member;

findAll = (req, res) => {
    Member.findAll()
        .then((members) => {res.status(200).send(members)}) 
        .catch((err) => res.status(400).send(err))
}
module.exports = {
    findAll
}