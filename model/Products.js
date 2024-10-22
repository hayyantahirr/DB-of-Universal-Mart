import mongoose from "mongoose";

const { schema } = mongoose;

const productsSchema = new schema({
  title: String,
  img: String,
  price: Number,
  brand: String,
  category: String,
  description: String,
});
