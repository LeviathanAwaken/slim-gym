const Employee = require('../models').employee;

findAll = (req, res) => {
    const { count = 100 } = req.query;
    return (
    Employee.findAll({
        include: [{
            all: true
        }],
        limit: count
    })
        .then((employees) => {res.status(200).send(employees)}) 
        .catch((err) => res.status(400).send(err))
    );
}
    add = (req, res) => {

        const{
            first_name,
            last_name,
            ssn,
            city,
            state,
            zip,
            street,
            phone_number,
            sex,
            email
        } = req.body;

        return Employee
        .create({
            first_name,
            last_name,
            ssn,
            city,
            state,
            zip,
            street,
            phone_number,
            sex,
            email
        })
        .then((employees) => {res.status(200).send(employee)}) 
        .catch((err) => res.status(400).send(err))
    }
module.exports = {
    findAll,
    add
}