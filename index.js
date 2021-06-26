const express = require('express')
const app = express()
const db = require('./connectDb')();
const userModel = require('./model/usersModel');
const cateModel = require('./model/cateModel');
const port = 3000

app.get('/read', async (req, res) => {
    var result = await userModel.find();
    res.json(result)
})

app.get('/readone', async (req, res) => {
    var result = await userModel.findOne({username:"李目"});
    res.json(result)
})

app.get('/deleteMany', async (req, res) => {
    var result = await userModel.deleteMany({username:"李白"});
    res.json(result)
})

app.get('/deleteone', async (req, res) => {
    var result = await userModel.deleteOne({username:"李白"});
    res.json(result)
})


app.get('/create', async (req, res) => {
    var users = {username:'杜甫',password:'11111'};
    
    try{
        var result = await userModel.create(users);
        res.json(result)
    }catch(e){
        console.log(e)
        res.json({'message':"插入失败"})
    }

})


app.get('/update', async (req, res) => {
    var result = await userModel.updateOne({username:"杜甫"},{username:'王维',password:'99999'});
    res.json(result)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))