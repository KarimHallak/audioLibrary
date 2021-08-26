const model = require("./album.model");
exports.listAlbums = async (req, res) => {
  console.log("listAlbums");

  try {
    const data = await model.find();
    return res.status(200).json({
      msg: "success",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({ msg: "failed" + err });
  }
};

exports.addAlbums = async (req, res) => {
  console.log("addAlbums");

  try {
    const albumModel = new model({
      name: req.query.name,
      description: req.query.description,
      showNbTracks: req.query.showNbTracks,
    });
    console.log(req.query);

    await albumModel.save();
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.deleteAlbums = async (req, res) => {
  try {
    await model.findByIdAndRemove(req.params.albumid);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.updateAlbums = async (req, res) => {
  try {
    await model.findByIdAndUpdate(req.params.albumid, req.query);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};
