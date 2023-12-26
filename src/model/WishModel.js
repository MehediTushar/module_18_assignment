const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
  productID: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductItem',required: true},
  userID: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true}
});

const WishModel = mongoose.model('WishItem', wishSchema);

module.exports = WishModel;
