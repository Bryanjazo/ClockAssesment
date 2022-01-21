const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors')
const connectDB = require('./config/db')
const morgan = require('morgan')

// Load env vars 
dotenv.config({ path: './config/config.env'})

// connecting to database
connectDB()

// routing files 
const clocks = require('./routes/clock')

// Load env vars 
dotenv.config({ path: './config/config.env'})
// use of express 
const app = express()
// middleware 
if(process.env.NODE_ENV = 'development'){
    app.use(morgan('dev'))
}
app.use('/api/v1/clocks', clocks)

// cors 
app.use(cors({
    origin: '*'
}))

// PORT
const PORT = process.env.PORT || 5000

// Listen
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// handle rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // close server 
    server.close(() => process.exit(1));
})
