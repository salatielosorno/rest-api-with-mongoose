var mongoose = require('mongoose')
const Account = mongoose.model('Account', {
    name: String,
    balance: Number
})

module.exports = Account