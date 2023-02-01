var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Employees = require('../models').employees; 

router.get('/findAll/json', function(req, res, next) {  

	
    Employees.findAll({  
        attributes: { exclude: [] }  
    })  
    .then(employees => {  
        res.json(employees);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

router.get('/findById/:id/json', function(req, res, next) {  

    let employeeNumber = parseInt(req.params.id);
  
    Employees.findAll({  
        attributes: { exclude: [] } ,
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