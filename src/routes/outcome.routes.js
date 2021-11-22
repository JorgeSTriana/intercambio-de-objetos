const express = require('express')
const router = express.Router()
const outcomeController = require('../controller/outcome.controller') 
/* const { check } = require('express-validator') */

/**
 * @api
 * @apiName
 * @apiGroup
 */
router.post('/', outcomeController.add )
router.get('/', outcomeController.list )
router.post('/:id', outcomeController.find )