const { data, Sequelize } = require("../models");

const update = async (req, res) => {
  try {
    const { searchContent, newContent } = req.body;
    //finding whether the record is present or not
    const findData = await data.findOne({
      where: { content: searchContent },
    });
    //if record not found
    if (!findData)
      res
        .status(404)
        .json({ message: "The data you wanted to update was not found!!!" });
    //updating the data
    else {
      await data.update(
        { content: newContent },
        { where: { id: findData.id } }
      );
      res.status(200).json({ message: "Data updated successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};
const add = async (req, res) => {
  try {
    //creating the record
    await data.create(req.body);
    res.status(200).json({ message: "data created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

module.exports = { add, update };
