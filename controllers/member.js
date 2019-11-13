const Member = require('../models').member;

findAll = (req, res) => {
    const { count = 100 } = req.query;
    return (
    Member.findAll({
        include: [{
            all: true
        }],
        limit: count
    })
        .then((members) => {res.status(200).send(members)}) 
        .catch((err) => res.status(400).send(err))
    );
}
    add = (req, res) => {

        const{
            first_name,
            last_name,
            birthday,
            city,
            state,
            zip,
            street,
            sex,
            email,
            tier
        } = req.body;

        return Member
        .create({
            first_name,
            last_name,
            birthday,
            city,
            state,
            zip,
            street,
            sex,
            email,
            tier
        })
        .then((member) => {res.status(200).send(member)}) 
        .catch((err) => res.status(400).send(err))
    }
module.exports = {
    findAll,
    add
}