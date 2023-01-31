var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Employees = require('../models').employees; 
const Offices = require('../models').offices;

router.get('/findAll/json', function(req, res, next) {  

	
    Employees.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

router.get('/findAll/view', function(req, res, next) {  

    Employees.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(employees => {  
        res.render('employees', { title: 'Employees', arrEmployees: employees });  
    })  
    .catch(error => res.status(400).send(error)) 
  
});
router.get('/findById/:id/json', function(req, res, next) {  

    let employeeNumber = parseInt(req.params.id);
  
    Employees.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        include: [{
            model: Offices,
            attributes: ['officeCode'],
            through: {attributes: []}
          }], 
        where: { 
          [Op.and]: [
            {employeeNumber: employeeNumber}
          ]
        }
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

module.exports = router;