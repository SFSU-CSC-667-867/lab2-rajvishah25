const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/world',(req ,res)  => res.send('Hello network'));

app.listen(port, () => console.log(`example app listening on port ${port}!`));
//http://localhost:3000/hello?name=rajvipm2 