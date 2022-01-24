
const asyncHandler = require('../middleware/async')
const Clock = require('../models/Clock')

// @desc    Get request for all clocks 
// @route   GET /api/va1/clocks
// @access  Public 

exports.getClocks = asyncHandler(async(req,res, next) =>{
    const clocks = await Clock.find()
    res.status(200).json({success: true, msg: 'Show all clock times', data: clocks})
})

// @desc    Get request for all clocks 
// @route   GET /api/va1/clocks/:id
// @access  Public 

exports.getClock = asyncHandler(async(req,res, next) =>{

    const clock = await Clock.findById(req.params.id)
    // const clock = await Clock.findById(req.)
    res.status(200).json({success: true, msg: 'Show one clock time', data: clock})
})

// @desc    POST request for all clocks 
// @route   POST /api/va1/clocks
// @access  Public 

exports.createClock = asyncHandler(async(req,res, next) =>{

    const clock = await Clock.create(req.body)

    res.status(201).json({
        success: true,
        data: clock
    })

})

// @desc    PUT request for all clocks 
// @route   PUT /api/va1/clocks/:id
// @access  Public 

exports.updateClock = asyncHandler(async(req,res, next) =>{
    const clock = await Clock.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({success: true, msg: 'Update Clock', data: clock})
})

// @desc    DELETE request for all clocks 
// @route   DELETE /api/va1/clocks/:id
// @access  Public 
exports.deleteClock = asyncHandler(async(req,res, next) =>{
    let id = req.params.id;
   
      Clock.findByIdAndRemove(id).then((docs) => {
        res.status(200).send({
          docs
        })
      }).catch((e) => {
        res.status(400)
      });
})