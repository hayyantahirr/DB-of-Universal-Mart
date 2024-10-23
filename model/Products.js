import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductsSchema = new Schema({
  title: String,
  img: String,
  price: Number,
  brand: String,
  category: String,
  description: String,
});

const Products = mongoose.model("products", ProductsSchema);

export default Products;
