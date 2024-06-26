const mongoose = require('mongoose')

let accountSchema = new mongoose.Schema({
    matter: {
        type: String,
        required: true
    }, //事项
    time: Date,
    type: {
        type: String,
        default: '支出',
        enum: ['支出', '收入']
    },
    amount: {
        type: Number,
        required: true
    },
    remark: String,
})
let accountModel = mongoose.model('demo_accounts', accountSchema)

module.exports = accountModel
