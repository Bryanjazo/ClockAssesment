const express = require('express')
const {getClock, getClocks, updateClock,deleteClock,createClock} = require('../controller/clocks')
const router = express.Router()


router.route('/').get(getClocks).post(createClock)

router.route('/:id').get(getClock).put(updateClock).delete(deleteClock)


module.exports = router;