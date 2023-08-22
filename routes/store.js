const express=require('express');
const router=express.Router();
const fs=require('fs')

router.get('/store',(req,res)=>{
	fs.readFile('items.json',(err,data)=>{
		if(err){
			res.status(500).send('erroe')
		}

        res.render('store.ejs',{
            items:JSON.parse(data)
        })
	})
})

module.exports=router;