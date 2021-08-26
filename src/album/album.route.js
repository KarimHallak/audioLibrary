const express = require("express");
const router = express.Router();
const controller =require("./album.controller");
router.get("/list/albums",controller.listAlbums);
router.post("/add/albums",controller.addAlbums);
router.delete("/delete/albums/:albumid",controller.deleteAlbums);
router.put("/update/albums/:albumid",controller.updateAlbums);


module.exports=router