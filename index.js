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
const pays=require('./routes/pay')



app.get('/',pays);
app.post('/payment',pays);






app.listen(port,()=>{
   console.log('listining in ',port)
})