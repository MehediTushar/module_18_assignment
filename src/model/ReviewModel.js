const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productID: {type: mongoose.Schema.Types.ObjectId,ref: 'ProductItem',required: true},
  userID: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
  des: String,
  rating: {type: Number,min: 1,max: 5}
});

const ReviewModel = mongoose.model('ReviewItem', reviewSchema);

module.exports = ReviewModel;
