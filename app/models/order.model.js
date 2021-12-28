module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        orderId: String,
        
      },
      { timestamps: true }
    );
  
    const Order = mongoose.model("order", schema);
    return Order;
  };
  