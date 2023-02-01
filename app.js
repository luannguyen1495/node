const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const conn = require('./config/database');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public/uploads'));
require('./routes/api.router')(app);
app.listen(process.env.PORT,()=>{
    console.log("chạy ngay đi trước khi mọi việc tồi tệ hơn")
})