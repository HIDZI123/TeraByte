const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://rya23:fUkMpWiIWZSb6uKv@hackathon.uyza15w.mongodb.net/?retryWrites=true&w=majority&appName=hackathon');
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;