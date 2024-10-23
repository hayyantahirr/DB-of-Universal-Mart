import express from "express";
import Products from "../model/Products.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Products.find();
  res.send({ data });
});
router.post("/addProduct", async (req, res) => {
  const data = req.body;
  await Products.create(data);
  res.send("post request successful");
});

export default router;
