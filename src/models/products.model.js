const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  img: {
    type: String
  }, 
  code: {
    type:String, 
    unique: true, 
    required: true
  },
  stock: {
    type: Number, 
    required: true
  },
  category: {
    type: String, 
    required: true
  },
  status: {
    type: Boolean, 
    required: true
  },
  thumbnails: {
    type: [String]
}
});

productSchema.plugin(mongoosePaginate);

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel; 