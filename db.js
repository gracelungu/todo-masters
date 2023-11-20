const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) || 'mongodb://localhost/todo-masters');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB: ', err);
    }
};
module.exports = connectDB;
