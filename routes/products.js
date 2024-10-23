import express from "express";
import Products from "../model/Products.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Products.find();
  res.send({ data });
});
router.post("/addProduct", async (req, res) => {
  const body = req.body;
  await Products.create(body);
  res.send("post request successful");
});

export default router;
