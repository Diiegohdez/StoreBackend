const express = require("express");
const productSchema = require("../models/product.js");

const router = express.Router();

//create product
router.post("/product", async (req, res)=> {
    const productCreate = await productSchema(req.body);
    productCreate.save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//get all product
router.get("/product", async (req, res)=> {
    await  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get a user
router.get("/product/:id", async (req, res)=> {
    const {id} = req.params;
    await productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//delete user
router.delete("/product/:id", async (req, res)=> {
    const {id} = req.params;
    await productSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update user
router.put("/product/:id", async (req, res)=> {
    const {id} = req.params;
    const {name, price, active, description, fecha, _id, img, platform, quantity, tipo, version} = req.body;
    await productSchema
    .updateOne({_id: id}, {$set:{name, price, active, description, fecha, _id, img, platform, quantity, tipo, version}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;