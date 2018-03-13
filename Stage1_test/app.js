var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello world! Your app is up and running in test namespace!\n')
})
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})
