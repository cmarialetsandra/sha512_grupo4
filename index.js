const express = require('express');
var crypto = require('crypto');

const app = express();

app.set('port', 3000);

app.listen(app.get('port'), ()=>{
    var hash = crypto.createHash('sha512');
    var data = hash.update('Comercio', 'utf-8');
    var generate_hash = data.digest('hex');
    console.log("hash : " + generate_hash);
});