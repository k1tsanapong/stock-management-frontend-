const productModels = require('../models/productModels');

const getAllProducts = async (req, res) => {
    const allProducts =  await productModels.getAllProducts();
    console.log(allProducts);
    res.render('home');
  };


  module.exports = {
    getAllProducts
  };
  