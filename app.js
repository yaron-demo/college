const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');




app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('*',(req,res)=>{

return res.status(200).json({Msg:"OK"});

});






 







module.exports=app;