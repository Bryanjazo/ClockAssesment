
const asyncHandler = require('../middleware/async')


// @desc    Get request for all clocks 
// @route   GET /api/va1/clocks
// @access  Public 

exports.getClocks = asyncHandler(async(req,res, next) =>{
    res.status(200).json({success: true, msg: 'Show all clock times'})
})

// @desc    Get request for all clocks 
// @route   GET /api/va1/clocks/:id
// @access  Public 

exports.getClock = asyncHandler(async(req,res, next) =>{
    res.status(200).json({success: true, msg: 'Show one clock time'})
})

// @desc    POST request for all clocks 
// @route   POST /api/va1/clocks
// @access  Public 

exports.createClock = asyncHandler(async(req,res, next) =>{
    res.status(200).json({success: true, msg: 'Creates Clock'})
})

// @desc    PUT request for all clocks 
// @route   PUT /api/va1/clocks/:id
// @access  Public 

exports.updateClock = asyncHandler(async(req,res, next) =>{
    res.status(200).json({success: true, msg: 'Update Clock'})
})

// @desc    DELETE request for all clocks 
// @route   DELETE /api/va1/clocks/:id
// @access  Public 
exports.deleteClock = asyncHandler(async(req,res, next) =>{
    res.status(200).json({success: true, msg: 'Delete Clock'})
})