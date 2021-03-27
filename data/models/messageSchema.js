const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
    message: {
        type:String,
    },
    username: {
        type:String,
    },
    sender: {
        type: String,
        type: Schema.Types.ObjectId,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    conversationId: {
        type: Schema.Types.ObjectId,
        ref: 'Conversations',    
    },
    date: {
        type: String,
        default: Date.now,
    },
}, {timestamps: true});

const Message = mongoose.model('messages', messageSchema);

module.exports = { Message }