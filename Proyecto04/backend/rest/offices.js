var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Offices = require('../models').offices;  

router.get('/findAll/json', function(req, res, next) {  

	
    Offices.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(offices => {  
        res.json(offices);  
    })  
    .catch(error => res.status(400).send(error)) 
  
});

router.get('/findById/:id/json', function(req, res, next) {  

    let officeCode = parseInt(req.params.id);
  
    Offices.findAll({  
        attributes: { exclude: ["updatedAt", "createdAt"] } ,
        where: { 
          [Op.and]: [
            {officeCode: officeCode}
          ]
        }
    })  
    .then(offices => {  
        res.json(offices);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });


module.exports = router;