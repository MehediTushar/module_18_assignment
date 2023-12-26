const mongoose=require('mongoose')
const FeaturesSchema=mongoose.Schema({
    name:{type: String,required: true},
    description:String,
    img:String
});
const FeaturesModel = mongoose.model('FeaturesItem', FeaturesSchema);
  
module.exports = FeaturesModel;