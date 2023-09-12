const express = require('express');
const {getallProductsStatic , getallProducts} =require('../Controllers/controller');

const router = express.Router()


// router.get('/' , getallProducts)
// router.get('/static',getallProductsStatic)

router.route('/').get(getallProducts)
router.route('/static').get(getallProductsStatic)

module.exports = router



 