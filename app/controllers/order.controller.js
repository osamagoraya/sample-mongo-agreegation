const db = require("../models");
const Order = db.orders;

exports.findAll = async (req, res) => {
  
  const { page, size } =req.query;

  let totalOrders = await Order.countDocuments();
  let orders = await Order
                     .aggregate()
                     .group({ 
                        _id : '$orderId',
                        products : { $push : { "_id" : "$_id", "name" : "$itemName" }},
                        count : { "$sum" : 1 }
                      })
                      .limit(Number(size)).skip(Number(page) * Number(size));

  res.send({orders, totalPages: Math.ceil(totalOrders / size)});

};



