const Database = require('sqlite-async');

let db

Database.open('./db/users.db')
    .then((d) => {
        console.log('Conneted to the users database - async')
        db = d
    })
    .catch(err => {
        console.error(err.message)
    })


const getUsers = id => {
    return db.get('SELECT * FROM users WHERE id = ?:', [id])
}

module.exports = {getUsers}