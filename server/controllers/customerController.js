const Customer = require("../models/Customer");
const mongoose = require("mongoose");

/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  const messages = req.flash("info");
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs User Management System",
  };

try {
  const customers = await Customer.find({}).limit(22);
  res.render("index", {
    locals,
    messages,
    customers
  });
} catch (error) {
  console.log(error);
  
}


 
};

exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer - NodeJs",
    description: "Free NodeJs User Management System",
  };

  res.render("customer/add", locals);
};

exports.postCustomer = async (req, res) => {
  console.log(req.body);
  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    details: req.body.details,
    tel: req.body.tel,
    email: req.body.email,
  });

  try {
    await Customer.create(newCustomer);
    req.flash("info", "New Customer Has been Added");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.view=async(req,res)=>{
  try {
    const customer = await  Customer.findOne({_id:req.params.id})
    const locals = {
      title: "Your customer Data",
      description: "Free NodeJs User Management System",
    };
    res.render("customer/view", {
      locals,
 
      customer
    });
  } catch (error) {
    console.log(error);
    
    
  }
}