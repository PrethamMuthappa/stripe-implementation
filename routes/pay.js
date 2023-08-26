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
const router=express.Router();

router.get('/',(req,res)=>{

    res.render('pay',{
        key:publish,
    })
    
})

router.post('/payment',(req,res)=>{
     stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        name:'pretham',
        address:{
            line1:"wdwdw",
            postal_code:'1112',
            city:'new delhi',
            state:'delhi',
            country:'india'
        }
    })
    .then((customer) => {
        return stripe.charges.create({
            amount:7000,
            description:'buy',
            currency:'usd',
            customer:"pretham",
        })
        

        
    }).then((charge) => {
        res.send("sucess")
    });
})
module.exports=router;