const express = require('express')
const router = express.Router()

router.use('/plans', require('./plans'))
router.use('/authors', require('./authors'))
router.use('/comments', require('./comments'))

module.exports = router