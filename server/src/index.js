const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');
const app = express();


// configure ENV
dotenv.config()


// setting up morgan
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

// PORT 
const PORT = process.env.PORT || 8000;


// BodyParser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}))


// Passport config
app.use(passport.initialize());
require('./services/jwtStrategy');
require('./services/googleStrategy');


// connect to mongo
const mongoOPtions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}
mongoose.connect(process.env.MONGO_URI, mongoOPtions, (err) => {
    if(err){
        console.log(err)
    } else{
        console.log('mongo connected...')
    }
});


// routes
app.use('/auth', authRoute)
app.use('/user', userRoute)


// App listening
app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    } else{
        console.log(`server listening on port: ${PORT}`)
    }
});