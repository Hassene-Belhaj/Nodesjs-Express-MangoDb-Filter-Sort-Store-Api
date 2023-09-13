const { query } = require('express');
const Product = require('../Models/products');

const getallProductsStatic = async (req, res) => {
    const products = await Product.find({price : {$gt : 30}}).sort('price').select('name price').limit(10)
    res.status(200).json({nbHits : products.length,products})
} 


const getallProducts = async (req, res) => {
    const {featured, company, name , sort , fields , numericsFilters} = req.query
    const queryObject = {}
    if(featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company) {
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex : name , $options: 'i'}
    }
    if(numericsFilters){
        const operatorMap = {
            '>' : '$gt' ,
            '>=' : '$gte' ,
            '=' : '$eq' ,
            '<' : '$lt' ,
            '<=' : '$lte' ,
        }
        const regEx =/\b(<|>|>=|=|<|<=)\b/g
        let filters = numericsFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
            )
            console.log(filters);
        }
    // console.log(queryObject);
    let result = Product.find(queryObject)
    // sort
    if(sort) {
    const sortList = sort.split(',').join(' ')
     result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }
    // fields with select 
    if(fields){
    const fieldsList = fields.split(',').join()
     result = result.select(fieldsList)
    }
    

    const products = await result
    res.status(200).json({nbhits : products.length,products})
}


module.exports = {
    getallProductsStatic,
    getallProducts
};
