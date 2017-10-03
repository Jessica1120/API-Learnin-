var express = require('express');
var app = express();

require('dotenv').config();

var request = require('request');

app.get('/giphy', function (req, res) {
    console.log('in giphy route');

    var options = {
        url:    'https://api.giphy.com/v1/gifs/trending?api_key=' + process.env.GIPHY_API_KEY + '&limit=25&rating=G',
        method: 'GET',

    }

    request(options, function(error, response, body ){
        console.log('error', error);
        console.log('StatusCode:', response && response.statusCode);
        console.log ('body', body);
        res.status(200).send(JSON.parse(body));
    })
});


app.listen(3000, function (req, res) {
    console.log('on 3000')
});