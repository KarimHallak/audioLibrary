const express = require("express");
const router = express.Router();
const controller =require("./collection.controller");
router.get("/list/collection",controller.listCollection);
router.post("/add/collection",controller.addCollection);
router.delete("/delete/collection/:albumid",controller.deleteCollection);
router.put("/update/collection/:albumid",controller.updateCollection);


module.exports=router