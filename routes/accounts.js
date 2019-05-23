const Account = require('../models/accounts')

module.exports = {
    getAccounts(req, res){
        try {
            Account.find({}, (err, results) => {
                if(err) return res.status(400).send()
                res.status(200).send(results)
            })
        } catch (error) {
            res.status(500).send()
        }
    },
    addAccount(req, res){
        try {
            let account = new Account({
                name: req.body.name,
                balance: req.body.balance
            })
            account.save((err, acc) => {
                if(err) return res.status(400).send()
                res.status(201).send(acc._id)
            })
        } catch (error) {
            res.status(500).send()
        }
    },
    updateAccount(req, res){
        try {
            let id = req.params.id
            Account.findById(id, (err, acc) => {
                if(err) return res.status(400).send()
                if(!acc) return res.status(400).send()
                let newAcc = {
                    name: req.body.name,
                    balance: req.body.balance
                }
                Object.assign(acc, newAcc)
                Account.findByIdAndUpdate(id, acc, { new : true}, (err, result) => {
                    if(err) return res.status(400).send()
                    res.status(200).send(result._id)
                })
            })
        } catch (error) {
            res.status(500).send()
        }
    },
    deleteAccount(req,  res){
        try {
            let id = req.params.id
            Account.findByIdAndDelete(id, (err, result) => {
                if(err) return res.status(400).send()
                res.status(204).send(result._id)
            })
        } catch (error) {
            res.status(500).send()
        }
    },
    getAccountsOne(req, res){
        try {
            let id = req.params.id
            Account.findById(id, (err, result) => {
                if(err) return res.status(400).send()
                if(!result) return res.status(400).send()
                res.status(200).send(result)
            })
        } catch (error) {
            res.status(500).send()
        }
    }
}