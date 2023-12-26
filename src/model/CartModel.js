const mongoose=require('mongoose')
const CartSchema=mongoose.Schema({


      productID: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductItem',required: true},
      userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
      color: String,
      price: Number,
      qty: Number,
      size: String

});
const CartModel = mongoose.model('CartItem', CartSchema);
  
  module.exports = CartModel;