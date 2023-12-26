const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({
  userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
  payable: {type: Number,required: true},
  cus_details: {type: String,required: true},
  ship_details: {type: String,required: true},
  tran_id: String,
  val_id: String,
  payment_status: {type: String,default: 'Pending'},
  delivery_status: {type: String, default: 'Pending'},
  total: {type: Number,required: true},
  vat: {type: Number, required: true }
});

const InvoiceModel = mongoose.model('InvoiceItem', invoiceSchema);

module.exports = InvoiceModel;
