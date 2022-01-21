const express = require('express')
const {getClock, getClocks, updateClock,deleteClock,createClock} = require('../controller/clock')
const router = express.Router()


router.route('/').get(getClocks).post(createClock)

router.route('/:id').get(getClock).put(updateClock).delete(deleteClock)


module.exports = router;