const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/hello',(req,res)  =>{


console.log(req.query);
res.send('Hello ' + req.query.name);
});
app.get('/add',(req ,res)  => res.send('0'));

app.listen(port, () => console.log(`example app listening on port ${port}!`));
//http://localhost:3000/hello?name=rajvi