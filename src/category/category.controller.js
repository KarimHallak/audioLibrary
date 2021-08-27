const model = require("./category.model");
exports.listCategory = async (req, res) => {
  console.log("listCategory");

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

exports.addCategory = async (req, res) => {
  console.log("addcategory");

  try {
    const albumModel = new model({
      name: req.body.name,
      description: req.body.description,
      showNbTracks: req.body.showNbTracks,
    });
    console.log(req.query);

    await albumModel.save();
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await model.findByIdAndRemove(req.params.category);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    await model.findByIdAndUpdate(req.params.category, req.body);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ msg: "failed" });
  }
};
