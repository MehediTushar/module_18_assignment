const mongoose = require('mongoose');

const invoiceProductSchema = new mongoose.Schema({
  userID: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
  productID: { type: mongoose.Schema.Types.ObjectId,ref: 'ProductItem',required: true},
  invoiceID: {type: mongoose.Schema.Types.ObjectId,ref: 'InvoiceItem', required: true},
  qty: {type: Number,required: true},
  price: {type: Number,required: true},
  color: String,
  size: String
});

const InvoiceProductModel = mongoose.model('InvoiceProduct', invoiceProductSchema);

module.exports = InvoiceProductModel;
