import mongoose from "mongoose";

const ProductScehma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
},{
    timestamps: true
});

const product = mongoose.model("Product",ProductScehma);

export default product;
