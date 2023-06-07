const Customer = require("../models/Customer");
const mongoose = require("mongoose");

/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {

    const locals = {
      title: 'NodeJs',
      description: 'Free NodeJs User Management System'
    }

      res.render('index', {
        locals,
      
      });

  
}
// exports.homepage = async (req, res) => {
//     const messages = await req.consumeFlash('info');
//     const locals = {
//       title: 'NodeJs',
//       description: 'Free NodeJs User Management System'
//     }

//     try {
//       const customers = await Customer.find({}).limit(22);
//       res.render('index', { locals, messages, customers } );
//     } catch (error) {
//       console.log(error);
//     }
// }

/**
 * GET /
 * About
 */






/**
 * GET /
 * New Customer Form
 */
exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer - NodeJs",
    description: "Free NodeJs User Management System",
  };

  res.render("customer/add", locals);
};
