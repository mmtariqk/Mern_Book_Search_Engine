const mongoose = require('mongoose');
require ("dotenv").config()
console.log("MONGO URI::", process.env.MONGODB_URI);

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

module.exports = mongoose.connection;



