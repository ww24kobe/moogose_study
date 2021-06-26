let mongoose = require('mongoose')
// 连接操作
module.exports = function () {
    return new Promise((resolve, reject) => {
        // 连接
        mongoose.connect('mongodb://localhost:27017/letao', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        mongoose.connection.on('open', err => {
            if (!err) {
                console.log('连接成功')
                resolve();
            } else {
                console.log('连接失败')
                reject();
            }
        })
    })
}