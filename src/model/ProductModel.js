const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {type: String, required: true},
  shortDes: String,
  price: {type: Number,required: true},
  discount: {type: Number, default: 0},
  discountPrice: {type: Number,
    default: function () {
      return this.price - (this.price * this.discount) / 100;
    }
  },
  image: String,
  star: {type: Number,default: 0
  },
  stock: {type: Number,default: 0},
  remark: String,
  categoryID: {type: mongoose.Schema.Types.ObjectId,ref: 'CategoryItem',required: true},
  brandID: { type: mongoose.Schema.Types.ObjectId,ref: 'BrandItem',required: true
  }
});

const ProductModel = mongoose.model('ProductItem', productSchema);

module.exports = ProductModel;
