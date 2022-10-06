const express = require("express")
const app = express()
const userRoutes = require('./controllers/user.controller');
const bodyParser = require('body-parser');

require('dotenv').config()
require('dotenv').config({ path: './config/.env' });
require('./config/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', userRoutes);

app.get("/", function(req, res){
    res.send("Hello Worl !")
})

app.listen(process.env.PORT, () => {
    console.log(`start at ${process.env.hostname}:${process.env.PORT}`);
});