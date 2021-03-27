const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },    
    date: {
        type: String,
        default: Date.now,
    },
});

const Conversation = mongoose.model('conversations', ConversationSchema);

module.exports = { Conversation }
