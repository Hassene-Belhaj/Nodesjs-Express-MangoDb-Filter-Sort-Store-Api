const Product = require('../Models/products');

const getallProductsStatic = async (req, res) => {
    const products = await Product.find({company : "marcos"})
    res.status(200).json({products,nbHits : products.length})
} 


const getallProducts = async (req, res) => {
    res.status(200).json({msg : 'products route'})
}


module.exports = {
    getallProductsStatic,
    getallProducts
};
