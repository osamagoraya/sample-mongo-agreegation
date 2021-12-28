module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all orders
    router.get("/", orders.findAll);
  
  
    app.use("/api/orders", router);
  };
  