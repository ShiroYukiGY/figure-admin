const Figure = require('../models/Figure');
const Artist = require('../models/artists');
const Categories = require('../models/Categories');
const Characters = require('../models/Characters');
const Companies = require('../models/Companys');
const Materials = require('../models/materials');
const Origins = require('../models/Origins');
const Accounts = require('../models/account');
const clound = require('../cloudinary');
const path = require('path');
const multer  = require('multer');
const Artists = require('../models/artists');
const { response } = require('express');

class AccController{
    async indexAcc(req,res){
        const accounts = await Accounts.find()
        res.render('body/indexAcc',{data:accounts});
    }
  
    async getTotal(req,res){
          
        res.render('body/Dashbroad',{title:"Dashbroad",user:undefined});
        
        }
    async getDay(req,res){
        let year = req.body.year;
        const Year = await Accounts.aggregate([ {
            '$match': {
              'dateCreate': {
                '$gte': new Date(`${year}-01-01`), 
                '$lte': new Date(`${parseInt(year)+1}-01-01`)
              }
            }
          }, {
            '$group': {
              '_id': {
                'month': {
                  '$month': '$dateCreate'
                }, 
                'year': {
                  '$year': '$dateCreate'
                }
              }, 
              'count': {
                '$sum': 1
              }
            }
          }]);
        res.json(Year)

    }






}
module.exports = new AccController;


