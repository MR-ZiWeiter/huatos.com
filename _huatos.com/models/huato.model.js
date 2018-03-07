var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var huatoSchema = new mongoose.Schema({
    title: String,
    description: String,
    data: Date,
    statue: String
});

/**
 * 连接到MongoDB数据库 huato ===> 表
 */
/**
 * 测试表
 * huatoSchema huatos
 * 会自动变成复数形式
 */
huatoSchema.plugin(mongoosePaginate);
const huato = mongoose.model('huato',huatoSchema);

/**
 * 导出
 */
module.exports = huato;
