const express = require("express");
const router = express.Router();
const controller =require("./category.controller");
router.get("/list/category",controller.listCategory);
router.post("/add/category",controller.addCategory);
router.delete("/delete/category/:category",controller.deleteCategory);
router.put("/update/category/:category",controller.updateCategory);


module.exports=router