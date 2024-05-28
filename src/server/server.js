var express = require('express');
var dotenv = require('dotenv');
const app = express();
dotenv.config();



port=process.env.PORT;
app.listen(port,()=>{
    console.log(`app is Running on ${port}`)
})