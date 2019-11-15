const Payment = require('../models').sale;

add = (req, res) => {
  const { member_id, payoccur, datepaid } = req.body;
  return Sale
    .create({
     member_id,
     payoccur,
     datepaid
    })
    .then((sale) => res.status(201).send(sale))
    .catch((error) => res.status(400).send(error));
}

findAll = (req, res) => {
  const { member_id } = req.query;
  let query;

  if(member_id) {
    query = {
      where: {
        member_id: member_id
      }
    };
  } else {
    query = {};
  }

  Payment.findAll({
    query
  })
    .then((payments) => res.status(200).send(payments))
    .catch((err) => res.status(400).send(err));
}

module.exports = {
  add,
  findAll
}