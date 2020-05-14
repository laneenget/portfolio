
let express = require('express')
let Sequelize = require('sequelize')
let db = require('../models')
let Message = db.Message
let formidable = require('formidable')

let router = express.Router()



router.post('/messages', function(req, res, next){
    Message.create(req.body).then( (data) => {
        let form = new formidable.IncomingForm()
        form.parse(req, function(err, fields, files){
        console.log(fields.to)
        console.log(fields.from)
        console.log(fields.subject)
        res.writeHead(200, {'content-type': 'text/plain'})
        return res.end('Message Received, Thanks!\r\n')})
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let warnings = err.errors.map( e => e.warning )
            return res.status(400).json(warnings)
        }
        return next(err)
    })
})

module.exports = router