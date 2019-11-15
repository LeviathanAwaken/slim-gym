const Equipment = require('../models').equipment;

findAll = (req, res) => {
    const { count = 100 } = req.query;
    return (
        Equipment.findAll({
            include: [{
                all: true,
            }],
            limit: count
        })
            .then((equipments) => {res.status(200).send(equipments)})
            .catch((err) => res.status(400).send(err))
    );
}

findById = (req, res) => {
    const { id } = req.params;
    return (
        Equipment.findById(id, {
            include: [{
                all: true
            }]
        })
            .then(equipment => {
                if(!equipment) {
                    return res.status(404).send({
                        message: 'Equipment Not Found',
                      });
                }
                return res.status(200).send(equipment);
            })
    );
}

module.exports = {
    findAll,
    findById
}