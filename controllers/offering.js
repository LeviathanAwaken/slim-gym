const Offering = require('../models').offering;

add = (req, res) => {
  const { class_id, employee_id, capacity, date, roomname, time} = req.body;
  return Offering
    .create({
      class_id,
      capacity,
      employee_id,
      roomname,
      date,
      time
    })
    .then((offering) => res.status(201).send(offering))
    .catch((error) => res.status(400).send(error));
}

findAll = (req, res) => {
  const { employee_id } = req.query;
  let query;

  if(employee_id) {
    query = {
      where: {
        employee_id: employee_id
      }
    };
  } else {
    query = {};
  }

  Offering.findAll({
    query
  })
    .then((offerings) => res.status(200).send(offerings))
    .catch((err) => res.status(400).send(err));
}

module.exports = {
  add,
  findAll
}