require('dotenv').config();

module.exports = {
    mongoURI: 
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@googlecloudfree.m2xpo.mongodb.net/ChatTime`

}