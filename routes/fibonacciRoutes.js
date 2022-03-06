const express = require('express')

const router = express.Router()

const fibonacciService = require('../services/fibonacciService')

router.get('/fibonacci', fibonacciService.getFibonacci)
router.post('/fibonacci', fibonacciService.getFibonacci)


module.exports = router;