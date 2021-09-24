const express = require('express');

const login = require('./routes/login');

const app = express();

app.set('port', 3000);

app.use(express.json());

app.use("/login", login);

app.listen(app.get('port'), ()=>{
    console.log("Node Server is running");
});