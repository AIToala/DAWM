var DataTypes = require("sequelize").DataTypes;
var _customers = require("./customers");
var _employees = require("./employees");
var _offices = require("./offices");

function initModels(sequelize) {
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var offices = _offices(sequelize, DataTypes);

  customers.belongsTo(employees, { as: "salesRepEmployeeNumber_employee", foreignKey: "salesRepEmployeeNumber"});
  employees.hasMany(customers, { as: "customers", foreignKey: "salesRepEmployeeNumber"});
  employees.belongsTo(employees, { as: "reportsTo_employee", foreignKey: "reportsTo"});
  employees.hasMany(employees, { as: "employees", foreignKey: "reportsTo"});
  employees.belongsTo(offices, { as: "officeCode_office", foreignKey: "officeCode"});
  offices.hasMany(employees, { as: "employees", foreignKey: "officeCode"});

  return {
    customers,
    employees,
    offices,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
