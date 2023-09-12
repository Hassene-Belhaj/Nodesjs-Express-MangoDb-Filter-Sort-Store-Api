const Product = require('./Models/products');
require('dotenv').config();
const connectDB = require('./config/Db');
const jsonProducts = require('./{} products.json');


const Start= async () => {
    try {
        await connectDB(process.env.DATABASE , console.log('connected to database'))
        await Product.deleteMany()
        await Product.create(jsonProducts)
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1 )
    }
}

Start()

