

const getallProductsStatic = async (req, res) => {
    res.status(200).json({msg : 'products testing route'})
} 


const getallProducts = async (req, res) => {
    res.status(200).json({msg : 'products route'})
}


module.exports = {
    getallProductsStatic,
    getallProducts
};
