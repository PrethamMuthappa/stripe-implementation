const express=require('express');
const dotenv=require('dotenv');
const path=require('path')
const fs=require('fs')
const ejs=require('ejs');
const stripe=require('stripe')(process.env.SECRETE_KEY);
dotenv.config();
const app=express();
const port=process.env.PORT || 5000
const publish=process.env.Publishable_key;
app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.static('public'))
const store=require('./routes/store')




app.get('/',(req,res)=>{
 
	res.sendFile(__dirname,'store.html')
});


app.use('/',store)





app.listen(port,()=>{
   console.log('listining in ',port)
})