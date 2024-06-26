const mongoose = require("mongoose");
const {db_name, host, port} = require("../config/db_config");
module.exports = function db(success) {
    // mongoose.connect('mongodb://127.0.0.1:27017/ahaotriple').then()
    mongoose.connect(`mongodb://${host}:${port}/${db_name}`).then()
    mongoose.connection.once('open', () => {
        console.log(' db open ')
        success()
    })
    mongoose.connection.on('error', (err) => {
        console.log(' db error ', err)
    })
    mongoose.connection.on('close', () => {
        console.log(' db close ')
    })
}