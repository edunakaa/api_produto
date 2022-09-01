const mongoose = require('mongoose');
const ProductCategory = mongoose.model('CategoriaProduto');

exports.listAll = async () => {
  const result = await ProductCategory.find({}, '_id departamento de categoria ativo');

  return result;
}

exports.create = async (data) => {
  let categoria = ProductCategory(data);
  await categoria.save();
}

exports.update = async (id, data) => {
  await ProductCategory.findByIdAndUpdate(id, {
    $set: {
      category: data.category,
      department: data.department,
      active: data.active
    }
  });
}

exports.getById = async (id) => {
  const result = await ProductCategory.findOne({_id: id}, '_id departamento de categoria ativo');

  return result;
}

exports.delete = async(id) => {
  await ProductCategory.findByIdAndUpdate(id, {
    $set: {  
      active: false
    }
  });
}