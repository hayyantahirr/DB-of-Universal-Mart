import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema({
  title: String,
  img: String,
  price: Number,
  brand: String,
  category: String,
  description: String,
});

const Products = mongoose.model("products", productsSchema);

export default Products;