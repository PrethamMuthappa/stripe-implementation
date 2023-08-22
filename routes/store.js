const express=require('express');
const dotenv=require('dotenv');
const path=require('path')
const stripe=require('stripe')(process.env.SECRETE_KEY);
dotenv.config();
const app=express();
const publish=process.env.Publishable_key;
app.use(express.json());
const router=express.Router()

router.post('/check',async(req,res)=>{
	const{card,expiry,cvv}=req.body;

	try{

     const charge=await stripe.charges.create({

		card:card,
		expiry:expiry,
		cvv:cvv
	 })

	 res.status(200).send('done')

	}
	catch(err){
		res.status(500).send('errror')
	}
})