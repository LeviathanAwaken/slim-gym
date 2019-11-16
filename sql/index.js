let fs = require('fs');
let employee = fs.readFileSync(__dirname + '/mockData/employee.sql').toString();
let payroll = fs.readFileSync(__dirname + '/mockData/payroll.sql').toString();
let member = fs.readFileSync(__dirname + '/mockData/member.sql').toString();
let equipment = fs.readFileSync(__dirname + '/mockData/equipment.sql').toString();
let exercisesets = fs.readFileSync(__dirname + '/mockData/exercisesets.sql').toString();
let classes = fs.readFileSync(__dirname + '/mockData/classes.sql').toString();
let paydate = fs.readFileSync(__dirname + '/mockData/paydate.sql').toString();
let payment = fs.readFileSync(__dirname + '/mockData/payment.sql').toString();
let offering = fs.readFileSync(__dirname + '/mockData/offering.sql').toString();
let memberlvl = fs.readFileSync(__dirname + '/mockData/memberlvl.sql').toString();
let giveaccess = fs.readFileSync(__dirname + '/mockData/giveaccess.sql').toString();

let sql =
     exercisesets
    + member
    + memberlvl
    + classes
    + payment
    + giveaccess
    + paydate
    + equipment
    + employee
    + offering 
    + payroll
    ;

module.exports = sql;