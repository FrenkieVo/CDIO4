const roleModule = require('../Models/roleModel')

//hàm tạo vai trò
const createRole = async (req,res) => {
    const data = req.body;
    const role = await roleModule.createRole(data);
    res.json(role); 
}

//lấy vai trò theo id
const getRoleById = async (req,res) => {
    const id = parseInt(req.params.id)
    const role = await roleModule.getRoleById(id);
    res.json(role); 
}

//sửa vai trò
const updateRole = async (req,res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const role = await roleModule.updateRole(id,data);
    res.json(role); 
}

//hàm tạo vai trò
const deleteRole = async (req,res) => {
    const id = parseInt(req.params.id);
    const role = await roleModule.deleteRole(id);
    res.json(role); 
}
module.exports = {
    createRole,
    getRoleById,
    updateRole,
    deleteRole
}
