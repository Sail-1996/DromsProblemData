const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const router = new express.Router();
const Employee = require("../models/students");

const instance = new Razorpay({
  key_id:process.env.SECRET_ID|| "rzp_test_iXU7DNimyAx1nW",
  key_secret:process.env.SECRET_KEY ||"X6jerR3HfqWEL1YzPmu1X3G9",
});


router.use(cors());

router.post("/employee", async (req, res) => {
  try {
    const user = new Employee(req.body);
   
    
    const createUser = await user.save();

    res.status(201).send(createUser);
  
  } catch (e) {
    res.status(400).send(e);
  }
});


router.get("/employee", async (req, res) => {
  try {
    const empData = await Employee.find();
    res.send(empData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const employeeData = await Employee.findById(_id);
    console.log(employeeData);
    if (!employeeData) {
      return res.status(404).send();
    } else {
      res.send(employeeData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/employee/:id", async (req, res) => {
  try {
   
   const deleteEmployee= await Employee.findByIdAndDelete(req.params.id);
   if(!req.params.id){
       return res.status(400).send()
   }
   res.send(deleteEmployee);
  } catch (e) {
      res.status(500).send(e);
  }
});


router.patch("/employee/:id", async (req, res) => {
  try {
   const _id=req.params.id;
   const updateEmployee= await Employee.findByIdAndUpdate(_id,req.body,{
       new:true
   });
  //  if(!req.params.id){
  //      return res.status(400).send()
  //  }
   res.send(updateEmployee);
  } catch (e) {
      res.status(404).send(e);
  }
});



module.exports = router;
