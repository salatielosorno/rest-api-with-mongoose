const express = require('express')
const router = express.Router()
const account = require('../routes/accounts')

router.get('/accounts', account.getAccounts)
router.post('/accounts', account.addAccount)
router.put('/accounts/:id', account.updateAccount)
router.get('/accounts/:id', account.getAccountsOne)
router.delete('/accounts/:id', account.deleteAccount)

module.exports = router