const express = require('express')
const router = express.Router()
const incomeController = require('../controller/income.controller') 
const { check } = require('express-validator')

/**
 * @api
 * @apiName
 * @apiGroup
 */
router.post('/', incomeController.add )
router.get('/', incomeController.list )
router.post('/:id', incomeController.find )

module.exports = router