
let mongoose = require('mongoose')
let Schema = mongoose.Schema;
//  1. 创建集合schema,约束字段。相当于创建表结构
let cateSchema = new Schema({
    cat_name: { type: String, required: true },
    p_id: { type: Number, required: true }
})

//  2. 根据所定义的集合schema，得到表对象model
// New mongoose.model('集合名（表名）','集合字段约束');
module.exports = new mongoose.model('cate',cateSchema);