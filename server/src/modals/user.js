const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    provider: {
        type: String,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        lowercase: true,
        match: [/\S+@\S.\S+/, 'is invalid'],
        index: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
        maxlength: 60,
    },
    name: String,
    avatar: String,
    role: {
        type: String,
        default: 'USER'
    },
    bio: String,
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true,
    },
}, {
    timestamps: true
})


userSchema.methods.toJSON = function(){
    return {
        id: this._id,
        provider: this.provider,
        email: this.email,
        username: this.username,
        avatar: this.avatar,
        name: this.name,
        role: this.role,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User