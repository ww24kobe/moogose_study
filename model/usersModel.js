
let mongoose = require('mongoose')
let Schema = mongoose.Schema;
//  1. 创建集合schema,约束字段。相当于创建表结构
let usersSchema = new Schema({
    username: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    hobby: {type: Array},
    addDate: {type: Date},
    status: {type: Number}
})

//  2. 根据所定义的集合schema，得到表对象model
// New mongoose.model('集合名词','集合字段约束');
module.exports = new mongoose.model('users',usersSchema);