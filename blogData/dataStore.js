const dataController = require('../Controller/dataController');

const data =require('express').Router()

data.get('/data',dataController);

module.exports=data