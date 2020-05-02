let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'portfolio', 'dist')))

app.use(bodyParser.json())

app.use('/api', api_routes)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})