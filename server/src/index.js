const express = require('express');
const app = express();
const dotenv = require('dotenv');

// configure ENV
dotenv.config()

// PORT 
const PORT = process.env.PORT || 8000;

// temp routes
app.get('/', (req, res) => {
    return res.json({type: 'success', msg: 'server started.'})
})

// Listen server
app.listen(PORT, (err) => {
    if(err){
        console.log(`Error: ${err}`)
    } 
    else{
        console.log(`Server listening on port: ${PORT}`)
    }
})