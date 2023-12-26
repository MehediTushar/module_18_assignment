const mongoose=require('mongoose')
const CategorySchema=mongoose.Schema({
    categoryName:{type: String,required: true},
    categoryImg:String
});
const CategoryModel = mongoose.model('CategoryItem', CategorySchema);
  
module.exports = CategoryModel;