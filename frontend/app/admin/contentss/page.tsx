"use client";

import { useEffect, useState } from "react";
import Api from "../../Api/Api";
import { useRef } from "react";

export default function ContentsManagement() {
  const inlineFileRef = useRef<any>(null);
  const [list, setList] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [filterDanhMuc, setFilterDanhMuc] = useState("");
  const thumbnailRef = useRef<any>(null);

  const [form, setForm] = useState({
    tieude: "",
    danhMuc: "",
    mota: "",
    noidung: ""   //  thêm vào đây
  });

  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const danhMucOptions = [
    { value: "dich-vu", label: "Dịch vụ" },
    { value: "review", label: "Review" },
    { value: "tin-tuc", label: "Tin tức" },
    { value: "dich-vu-luu-tru", label: "Dịch vụ lưu trú" },
    { value: "kinh-nghiem", label: "Kinh nghiệm" }
  ];

  const loadNoidung = () => {
    Api.get("noidung")
      .then(res => setList(res.data))
      .catch(() => alert("Lỗi tải nội dung"));
  };

  useEffect(() => {
    loadNoidung();
  }, []);

  const handleSubmit = async () => {
    thumbnailRef.current.value = null; // reset input file
    const formData = new FormData();
    formData.append("tieude", form.tieude);
    formData.append("danhMuc", form.danhMuc);
    formData.append("mota", form.mota);
    formData.append("noidung", form.noidung); //  HTML

    selectedFiles.forEach(f => formData.append("hinhanh", f));

    await fetch("http://localhost:3000/api/noidung", {
      method: "POST",
      body: formData,
    });

    alert("Đăng bài thành công ");
    setForm({ tieude: "", danhMuc: "", mota: "", noidung: "" });
    setSelectedFiles([]);
    thumbnailRef.current.value = null; //  reset input file
    loadNoidung();
  };

  const deleteItem = (id:number) => {
    if (!confirm("Xóa nội dung này?")) return;
    Api.delete(`noidung/${id}`)
      .then(() => loadNoidung())
      .catch(() => alert("Lỗi xóa"));
  };

  const handleInlineUpload = async (e:any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:3000/api/noidung/upload-inline", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    setForm(prev => ({
      ...prev,
      noidung: prev.noidung + `<p><img src="${data.url}" /></p>`
    }));
  };

  const handleUpdate = async () => {
    thumbnailRef.current.value = null; // reset input file
    const formData = new FormData();
    formData.append("tieude", form.tieude);
    formData.append("danhMuc", form.danhMuc);
    formData.append("mota", form.mota);
    formData.append("noidung", form.noidung);

    selectedFiles.forEach(f => formData.append("hinhanh", f));

    await fetch(`http://localhost:3000/api/noidung/${editing.id}`, {
      method: "PUT",
      body: formData,
    });

    alert("Cập nhật thành công!");
    setEditing(null);
    setForm({ tieude: "", danhMuc: "", mota: "", noidung: "" });
    setSelectedFiles([]);
    thumbnailRef.current.value = null;
    loadNoidung();
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold mb-8">Quản lý nội dung</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">📝 Đăng nội dung mới</h2>

        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Tiêu đề"
            value={form.tieude}
            onChange={e => setForm({ ...form, tieude: e.target.value })}
            className="border p-3 rounded-lg w-full"
          />

          <select
            value={form.danhMuc}
            onChange={e => setForm({ ...form, danhMuc: e.target.value })}
            className="border p-3 rounded-lg"
          >
            <option value="">-- Chọn danh mục --</option>
            {danhMucOptions.map(op => (
              <option key={op.value} value={op.value}>{op.label}</option>
            ))}
          </select>

          {/* ảnh đại diện */}
          <div className="col-span-2">
            <label className="font-semibold">Ảnh đại diện</label>
            <input
              type="file"
              multiple
              ref={thumbnailRef}
              onChange={(e) => setSelectedFiles(Array.from(e.target.files ?? []))}
              className="border p-3 rounded-lg w-full"
            />

            {selectedFiles.length > 0 && (
              <div className="grid grid-cols-5 gap-3 mt-3">
                {selectedFiles.map((file:any, i:number) => (
                  <img src={URL.createObjectURL(file)} key={i} className="w-full h-24 object-cover rounded-lg" />
                ))}
              </div>
            )}
          </div>

          <textarea
            placeholder="Mô tả ngắn..."
            value={form.mota}
            onChange={e => setForm({ ...form, mota: e.target.value })}
            className="border p-3 rounded-lg col-span-2"
          />

          {/* Nội dung HTML */}
         {/* Nội dung HTML */}
          <textarea
            placeholder="Nhập nội dung HTML / Text..."
            value={form.noidung}
            onChange={e => setForm({ ...form, noidung: e.target.value })}
            className="border p-3 rounded-lg col-span-2 h-56"
          />

          <button
            type="button"
            className="col-span-2 px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => inlineFileRef.current?.click()}
          >
          📸 Chèn ảnh vào nội dung
          </button>

          <input
            id="inlineFile"
            type="file"
            name="file"        //  thêm để khớp multer.single("file")
            accept="image/*"
            hidden
            ref={inlineFileRef}
            onChange={handleInlineUpload}
          />

          {/* Preview nội dung để xem ảnh có hiện chưa */}
          <div
            className="col-span-2 border p-3 rounded-lg bg-gray-50 max-h-80 overflow-auto"
            dangerouslySetInnerHTML={{ __html: form.noidung }}
          />

        </div>

          {editing ? (
            <div className="flex gap-3">
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg"
              >
                Cập nhật
              </button>

              <button
                onClick={() => {
                  setEditing(null);
                  setForm({ tieude: "", danhMuc: "", mota: "", noidung: "" });
                  setSelectedFiles([]);
                  thumbnailRef.current.value = null; 
                }}
                className="bg-gray-400 text-white py-3 px-6 rounded-lg"
              >
                Hủy
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-[#2964d9] text-white py-3 px-6 rounded-lg hover:bg-blue-800"
            >
              Đăng bài
            </button>
          )}

      </div>

      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">📚 Danh sách bài đăng</h2>

        <select
          value={filterDanhMuc}
          onChange={(e) => setFilterDanhMuc(e.target.value)}
          className="border px-4 py-2 rounded-lg bg-white shadow-sm"
        >
          <option value="">-- Tất cả danh mục --</option>
          {danhMucOptions.map(op => (
            <option key={op.value} value={op.value}>{op.label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {list
          .filter(item => !filterDanhMuc || item.danhMuc === filterDanhMuc)
          .map((item, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 rounded-xl flex justify-between cursor-pointer"
              onClick={() => {
                setEditing(item);
                setForm({
                  tieude: item.tieude,
                  danhMuc: item.danhMuc,
                  mota: item.mota,
                  noidung: item.noidung
                });
                  setPreviewOpen(true);
              }}
            >
              <div>{item.tieude}</div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(item.id);
                }}
                className="text-red-500"
              >
                Xóa
              </button>
            </div>
        ))}
      </div>


      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center p-6 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-[65%] max-h-[85vh] overflow-y-auto p-6 border border-gray-200 relative animate-fadeIn">
            
            <button
              className="absolute top-3 right-4 text-red-500 font-semibold hover:text-red-700"
              onClick={() => setPreviewOpen(false)}
            >
              ✖ Đóng
            </button>

            <h2 className="text-2xl font-bold">{form.tieude}</h2>
            <p className="text-gray-500">{form.danhMuc}</p>

            <div className="border-t my-3"></div>

            {selectedFiles.length === 0 && editing?.hinhanh && JSON.parse(editing.hinhanh).length > 0 && (
              <img
                src={`http://localhost:3000${JSON.parse(editing.hinhanh)[0]}`}
                className="w-56 h-40 object-cover rounded-lg shadow-md mb-4"
              />
            )}

            <div
              className="prose max-w-full"
              dangerouslySetInnerHTML={{ __html: form.noidung }}
            />

          </div>
        </div>
      )}


    </div>
  );
}
