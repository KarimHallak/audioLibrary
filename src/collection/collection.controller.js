const model = require("./collection.model");
exports.listCollection = async (req, res) => {
  console.log("listCollection");

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

exports.addCollection = async (req, res) => {
  console.log("addCollection");

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

exports.deleteCollection = async (req, res) => {
  try {
    await model.findByIdAndRemove(req.params.albumid);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.updateCollection = async (req, res) => {
  try {
    await model.findByIdAndUpdate(req.params.albumid, req.query);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};
