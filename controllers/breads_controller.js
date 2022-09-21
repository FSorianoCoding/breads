const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
// models are what data is supposed to look like or has to look like.

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})



// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads