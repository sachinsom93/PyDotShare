const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err) => {
    if(err){
        console.log(err)
    } else{
        console.log(`Mongo connected.`)
    }
})