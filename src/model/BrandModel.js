const mongoose=require('mongoose')
const BrandSchema=mongoose.Schema({
    brandName:{type: String,required: true},
    brandImg:String
}); 
const BrandModel = mongoose.model('BrandItem', BrandSchema);
  
  module.exports = BrandModel;