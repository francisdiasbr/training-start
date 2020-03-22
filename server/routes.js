const express = require('express')
const router = express.Router()
const {page} = require('./page')
router.post('/page', page)
module.exports = router
