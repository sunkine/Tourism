const mongoose = require('mongoose');

async function connectMongoDB() {
    try {
      const URI = process.env.MONGODB_URI
        await mongoose.connect(URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
        return true;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        return false;
    }
}

module.exports = { connectMongoDB };
