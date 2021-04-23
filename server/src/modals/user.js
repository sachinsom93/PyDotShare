const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    provider: String,
    providerId: String,
    name: String,
    profileImage: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const userModal = mongoose.model('User', userSchema)

module.exports.userModal = userModal