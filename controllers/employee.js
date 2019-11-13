const Salesperson = require('../models').salesperson;

findAll = (req, res) => {
    const { count = 100 } = req.query;
    return (
        Employee.findAll({
            include: [{
                all: true
            }],
            limit: count
        })
            .then((employees) => { res.status(200).send(employees) })
            .catch((err) => res.status(400).send(err))
    );
}

findById = (req, res) => {
    const { id } = req.params;
    return (
        Employee.findById(id, {
            include: [{
                all: true
            }]
        })
            .then(employee => {
                if (!employee) {
                    return res.status(404).send({
                        message: 'Employee Not Found',
                    });
                }
                return res.status(200).send(employee);
            })
    );
}

module.exports = {
    findAll,
    findById
}