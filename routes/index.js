let express = require('express');
let router = express.Router();
const accountsModel = require('../models/account')
const uuid = require("uuid");


/* 新增*/
router.post('/account', function (req, res, next) {
    let req_data = req.body
    console.log('post body ', req.body)
    accountsModel.create({
        amount: req_data.amount,
        matter: req_data.matter,
        remark: req_data.remark,
        time: req_data.time,
        type: req_data.type
    }).then(data => {
        console.log(' create success ')
    }).catch(err => {
        console.log('create error ', err)
    })
    res.send('添加成功')
});
/* 查询*/
router.get('/about', function (req, res, next) {
    let req_data = req.body
    console.log('get body ', req.body)
    accountsModel.find().then(data => {
        console.log(' create success ', data)
        res.send(data)
    }).catch(err => {
        console.log('create error ', err)
        res.send(err)
    })
})


module.exports = router;
