let express = require('express')
let Sequelize = require('sequelize')
let db = require('../models')
let Message = db.Message

let router = express.Router()

router.get('/messages', function(req, res, next) {
    Message.findAll().then( messages => {
        return res.json(messages)
    }).catch( err => next(err))
})

router.post('/messages', function(req, res, next){
    Message.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let warnings = err.errors.map( e => e.warning )
            return res.status(400).json(warnings)
        }
        return next(err)
    })
})

module.exports = router