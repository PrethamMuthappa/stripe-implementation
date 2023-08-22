const express=require('express');
const dotenv=require('dotenv');
const path=require('path')
const stripe=require('stripe')(process.env.SECRETE_KEY);
dotenv.config();
const app=express();
const publish=process.env.Publishable_key;
app.use(express.json());
const router=express.Router()