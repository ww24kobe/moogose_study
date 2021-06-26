var db = require('./connectDb.js')();
const mongoose = require('mongoose');
const usersModel = require('./model/usersModel.js');
const cateModel = require('./model/cateModel.js');


(async function(){
    await db;

    // var result = await usersModel.create({
    //     username: '李目',
    //     password: '66666',
    //     hobby: ['吃饭','睡觉','写代码'],
    //     addDate: Date.now(),
    //     status: 1
    // })

    // console.log(result)

    var result1 = await cateModel.insertMany([{cat_name:'体育',p_id:'777'},{cat_name:'足球',p_id:1}]);
    console.log(result1)

})()






