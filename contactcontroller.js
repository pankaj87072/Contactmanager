//this is made to controll the get post edit delete the contacts
//get the contact
const asynchandler=require('express-async-handler');
const express=require('express');
const contactget=asynchandler(async(req,res)=>{
    res.status(200).json({details:"ALL CONTACT ARE PRESENT"});
});
//post
const contactpost=asynchandler(async(req,res)=>{
    console.log(req.body);
    const {name,rollno}=req.body;
    if(!name||!rollno){
        res.status(400);
        throw new Error("error! contact not found");
    }
    res.status(200).json({details:"ALL CONTACTS ARE POSTED"});
});
const contactput=asynchandler(async(req,res)=>{
    res.status(200).json({details:`ALL CONATACTS ARE UPDATED ${req.params.id}`});
});
const contactdelete=asynchandler(async(req,res)=>{
    res.status(200).json({details:"ONE COANTACT ARE  DELETED"});
});
module.exports={contactget,contactpost,contactput,contactdelete};
