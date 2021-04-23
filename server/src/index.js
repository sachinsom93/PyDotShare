const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

// configure ENV
dotenv.config()

require('./config/passport')(passport)

// setting up morgan
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

// mongo config
require('./config/db')

// PORT 
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(cors());

// express-session
app.use(
    session({
        secret: 'sachinsom',
        resave: true,
        saveUninitialized: true,
        cookie: {
            sameSite: "none",
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
        }
    })
);


// Passport 
app.use(passport.initialize());
app.use(passport.session());
    
// passport config

// routes
app.use('/user', userRoute)
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