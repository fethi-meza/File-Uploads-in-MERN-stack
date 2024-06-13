const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    image: {
        type: String,
    }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);
