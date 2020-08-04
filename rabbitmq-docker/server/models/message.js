const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    name: { type: String, required: true },
    value: { type: Number }
});

module.exports = mongoose.model('Message', MessageSchema);