var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;  
const Employee = require('../models').employees;

router.get('/findAll/json', function(req, res, next) {  

	
    Customers.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

router.get('/findAll/view', function(req, res, next) {  

    Customers.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(customers => {  
        res.render('customers', { title: 'Customers', arrCustomers: customers });  
    })  
    .catch(error => res.status(400).send(error)) 
  
});
router.get('/findById/:id/json', function(req, res, next) {  

  let customerNumber = parseInt(req.params.id);

  Customer.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
      include: [{
          model: Employee,
          attributes: ['employeeNumber'],
          through: {attributes: []}
        }], 
      where: { 
        [Op.and]: [
          {customerNumber: customerNumber}
        ]
      }
  })  
  .then(customers => {  
      res.json(customers);  
  })  
  .catch(error => res.status(400).send(error)) 

});

module.exports = router;