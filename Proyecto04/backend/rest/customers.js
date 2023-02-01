var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customer = require('../models').customers;

router.get('/findAll/json', function(req, res, next) {  
  
    Customer.findAll({  
        attributes: { exclude: [] } ,
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

router.get('/findById/:id/json', function(req, res, next) {  

    let customerNumber = parseInt(req.params.id);
  
    Customer.findAll({  
        attributes: { exclude: [] } ,
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
