const images = require('../models/image.model')
const path = require('path');

const connectDB = require('../config/dbconnect');
connectDB();



const getimage = async (req, res) => {
    const image = await images.find();
    console.log('image')
    res.json(image);
}

const updateImage = async (req, res) => {
    try {
        const image = await images.findOne({ _id: "65f5b24e7bb821bbf4d0dc13" });
        image.link = path.join(__dirname, '..', req.file.path);
        const result = await image.save();
        res.status(201).json(path.join(__dirname, '../..' ,req.file.path))
        console.log(__dirname)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
};


module.exports = { getimage, updateImage };


// const count = new counter({ "count": "Abcd" })
// count.save().then(() => console.log("Saved"));