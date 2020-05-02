let express = require('express')
let db = require=('../models')
let Message = db.Message

let router = express.Router()

router.get('/messages', function(req, res, next) {
    Message.findAll().then( messages => {
        return res.json(messages)
    })
})

router.post('/messages', function(req, res, next){
    Message.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    })
})

module.exports = router