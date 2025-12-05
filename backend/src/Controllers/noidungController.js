const model = require("../Models/noidungModel");
const multer = require("multer");
const path = require("path");

// multer xử lý ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/noidung"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage }).array("hinhanh", 10);


// CẤU HÌNH LƯU ẢNH
const storageInline = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/inline"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname));
  }
});

const uploadInlineMulter = multer({ storage: storageInline }).single("file");

const uploadInline = (req, res) => {
  uploadInlineMulter(req, res, err => {
    if (err) return res.status(500).json({ error: "Lỗi upload ảnh" });

    //  THÊM BẢO VỆ
    if (!req.file) {
      return res.status(400).json({ error: "Không nhận được file" });
    }

    return res.json({
      url: `http://localhost:3000/uploads/inline/${req.file.filename}`
    });
  });
};

const noidungcreate = async (req, res) => {
  try {
    const data = req.body;

    // ảnh đại diện
    if (req.files?.length > 0) {
      data.hinhanh = JSON.stringify(
        req.files.map(f => `/uploads/noidung/${f.filename}`)
      );
    } else {
      data.hinhanh = "[]";
    }

    // ⚠️ noidung giữ nguyên HTML text
    // FE gửi HTML -> lưu thẳng
    const content = await model.createNoiDung({
      ...data,
      noidung: data.noidung
    });

    res.json({ success: true, content });
  } catch (e) {
    console.log("Lỗi đăng:", e);
    res.status(500).json({ error: "Lỗi tạo nội dung" });
  }
};

const noidunggetAll = async (req, res) => {
  res.json(await model.getAllNoiDung());
};

const noidunggetDetail = async (req, res) => {
  res.json(await model.getDetail(req.params.id));
};

const noidungdelete = async (req, res) => {
  await model.deleteNoiDung(req.params.id);
  res.json({ message: "Đã xóa" });
};

const noidunggetByDanhMuc = async (req, res) => {
  try {
    const data = await model.getNoiDungByDanhMuc(req.params.slug);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Lỗi lấy theo danh mục" });
  }
};

const noidungupdate = async (req, res) => {
  try {
    const data = req.body;

    // Nếu có ảnh mới → replace
    if (req.files?.length > 0) {
      data.hinhanh = JSON.stringify(
        req.files.map(f => `/uploads/noidung/${f.filename}`)
      );
    } else {
      //  Nếu không chọn ảnh mới → giữ ảnh cũ
      const old = await model.getDetail(req.params.id);
      data.hinhanh = old.hinhanh;
    }

    const updated = await model.updateNoiDung(req.params.id, data);
    res.json({ success: true, updated });
  } catch (e) {
    console.log("Lỗi cập nhật:", e);
    res.status(500).json({ error: "Lỗi cập nhật nội dung" });
  }
};

module.exports = {
  upload,
  noidungcreate,
  noidunggetAll,
  noidunggetDetail,
  noidungdelete,
  noidunggetByDanhMuc,
  uploadInline,
  noidungupdate
};
