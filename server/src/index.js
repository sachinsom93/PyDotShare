const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// configure ENV
dotenv.config()


// setting up morgan
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

// mongo config

// PORT 
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// express-session
app.use(
    session({
        secret: 'sachinsom',
        resave: true,
        saveUninitialized: true,
        // cookie: {
            //     sameSite: 'strict',
            //     secure: true,
            //     maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
            // }
    })
);
app.use(cookieParser('secret code'))
// Passport 
app.use(passport.initialize());
app.use(passport.session());

// passport config
require('./config/passport')(passport)

// routes
app.use('/user', userRoute)
app.use('/auth', authRoute)


// Listen server
require('./config/db')


// mongo connection options 
const mongoOPtions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// mongo and server listening
mongoose.connect(process.env.MONGO_URI, mongoOPtions,(err) => {
    if(err){
        console.log(`Error in Mongo Connection: `, err.message)
    } else{
        app.listen(PORT, (err) => {
            if(err){
                console.log(`Error in server: ${err.message}`)
            }
            else{
                console.log(`Server listening on port.`)
                console.log(`Please Visit http://localhost:${PORT}/`)
            }
        })
    }
})