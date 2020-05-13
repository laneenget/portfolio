let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')
let formidable = require('formidable')

let app = module.exports = express()

app.use(express.static(path.join(__dirname, 'portfolio', 'dist')))

app.use(bodyParser.json())

app.use('/api', api_routes)

app.post('/incoming_mail', function(req, res){
    let form = new formidable.IncomingForm()
    form.parse(req, function(err, fields, files){
        console.log(fields.to)
        console.log(fields.from)
        console.log(fields.subject)
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('Message Received, Thanks!\r\n')
    })
})

//Handle routes not found
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

//Handle server errors
app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Server error')
})

//Start server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})