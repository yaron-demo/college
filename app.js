const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.all('*',(req,res)=>{

return res.status(200).json({Msg:process.env.CONN_STR2});

});






 







module.exports=app;