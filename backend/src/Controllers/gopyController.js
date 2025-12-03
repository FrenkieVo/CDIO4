const gopyModel = require("../Models/gopyModel");

const createGopY = async (req, res) => {
  try {
    const data = req.body;

    const save = await gopyModel.createGopY({
      ...data,
      yeutochon: JSON.stringify(data.yeutochon || []),
      thangdukien: JSON.stringify(data.thangdukien || []),
      danhgiachitiet: JSON.stringify(data.danhgiachitiet || []),
    });

    res.json({
      message: "Gửi góp ý thành công!",
      data: save
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Lỗi hệ thống!" });
  }
};

const getGopy = async (req, res) => {
  const gopyList = await gopyModel.getGopyList();
  res.json(gopyList)
}

const deleteGopY = async (req, res) => {
  try {
    const id = req.params.id;

    await gopyModel.deleteGopY(id);

    res.json({ message: "Xóa góp ý thành công!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Lỗi hệ thống!" });
  }
};

module.exports = {
  createGopY,
  getGopy,
  deleteGopY
};

