var express = require('express');
var app = express();

app.use(express.static('src'));

app.listen(3000, function () {
    console.log('Our app is listening on port 3000!');
});