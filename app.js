const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Server listening on port %s', port);
});

app.get('/', function(req, res) {
    res.end('Welcome to Heroku cloud app');
});

app.get('/products', function(req, res) {
    fs.readFile('products.json', function(err, data) {
        if(err)
            res.json({message: "Error while reading a file", status: 500});
        else
            res.json(JSON.parse(data.toString()));
    });
});