
let express = require('express')
let Sequelize = require('sequelize')
let db = require('../models')
let Message = db.Message
let api_key = '38260c09b16ddee583ab0f9006640faa-3e51f8d2-3bfa9d56';
let domain = 'sandboxcb6d364f0c354194ad7fd7956f40b11e.mailgun.org';
let Mailgun = require('mailgun-js')

let router = express.Router()
let mailgun = Mailgun({apiKey: api_key, domain: domain})

mailgun.post('/routes', {"priority": 0, "description":"Sample route",
"expression": 'match_recipient(".*@sandboxcb6d364f0c354194ad7fd7956f40b11e.mailgun.org")',
"action": 'forward("enget.lane@gmail.com")', "action": 'stop()'},
function(error, body){
    console.log(body);
})

module.exports = router