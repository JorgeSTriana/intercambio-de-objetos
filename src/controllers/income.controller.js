const msg = require('../helpers/messages')
/* const { check, validationResult } = require('express-validator') */
const Income = require('../models/income')

const incomeController = {
    add: async function(req, res){
        try {
            const income = Income(req.body)
            await income.save()
            res.status(200).json({"income": income}) 
        } catch (error) {
            res.status(500).json({"error": error})
        }
    },
    list: async function(req, res){
        try {
            const list = await Income.find()
            res.status(200).json({"incomes":list})
        } catch (error) {
            res.status(500).json({"error":error})
        }
    },
    find: async function(req, res){
        try {
            let income = await Income.findById(req.params.id)
            res.status(200).json({"income":income})
        } catch (error) {
            res.status(500).json({"error":error})
        }
    },
}
module.export = incomeController