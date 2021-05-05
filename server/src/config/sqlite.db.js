const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('../db/users.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err){
        console.log(`SQlite ERROR: ${err}`)
    } else{
        console.log(db)
        console.log('SQLite connected...')
    }
}) 

module.exports = db