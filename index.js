const express=require('express');
const dotenv=require('dotenv');
const path=require('path')
const stripe=require('stripe')(process.env.SECRETE_KEY);
dotenv.config();
const app=express();
const port=process.env.PORT || 5000
const publish=process.env.Publishable_key;
app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');



app.get('/',(req,res)=>{
 
	res.render('index')
});

app.get('/check',(req,res)=>{
   res.render('check')
})





app.listen(port,()=>{
   console.log('listining in ',port)
})