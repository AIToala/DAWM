const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    customerNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contactLastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contactFirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressLine1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressLine2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postalCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    salesRepEmployeeNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employeeNumber'
      }
    },
    creditLimit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customerNumber" },
        ]
      },
      {
        name: "salesRepEmployeeNumber",
        using: "BTREE",
        fields: [
          { name: "salesRepEmployeeNumber" },
        ]
      },
    ]
  });
};
