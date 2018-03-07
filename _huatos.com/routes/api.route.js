var express = require('express');

var router = express.Router();
// 导入华图测试api接口
var huato = require('./api/huato.route');
// 导入产品列表接口
var productsList = require('./api/products.route');
/**
 * 分页方式 ex: /huato?page=1&limit=2
 * @page: 当前页码
 * @limit: 每页条数 
 */
router.use('/huato', huato);
router.use('/products', productsList);

module.exports = router;