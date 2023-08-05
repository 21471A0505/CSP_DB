const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const Route1 = require('./Routes/Route1');
const Route2 = require('./Routes/Route2');
const dept = require('./Routes/dept');
const Signup = require('./Routes/sign');
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/',Route1);
app.use('/',Route2);
app.use('/volunteer',dept);
app.use('/signup',Signup)

module.exports =app;