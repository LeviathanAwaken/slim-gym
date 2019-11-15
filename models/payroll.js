module.exports = (sequelize, DataTypes) => {
  var Payroll = sequelize.define("payroll", {
    employee_id: { type: DataTypes.INTEGER, allowNull: false },
    salary: { type: DataTypes.FLOAT(2), allowNull: false },
    pay: { type: DataTypes.FLOAT(2), allowNull: false }
  });

  return Payroll;
};
