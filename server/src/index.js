const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const expressSession = require('express-session');
const passport = require('passport');
const authRoute = require('./routes/auth');


// configure ENV
dotenv.config()

// setting up morgan
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

// PORT 
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// express-session
app.use(
    expressSession({
        secret: process.env.SESSION_SECRET,
        resave: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
        saveUninitialized: false
    })
    );
// passport config
require('./config/passport')

// Passport 
app.use(passport.initialize());
app.use(passport.session());


// routes
app.use('/auth', authRoute)


// Listen server
app.listen(PORT, (err) => {
    if(err){
        console.log(`Error: ${err}`)
    } 
    else{
        console.log(`Server listening on port: ${PORT}`)
    }
})