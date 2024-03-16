const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
const { error } = require('console');
const multer = require('multer')
const mongoose = require('mongoose')
const { getimage, updateImage } = require('./controller/imageController')

const PORT = process.env.PORT || 3000;


app.use(cors());


app.use(express.json());


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        return cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage })


// app.post('/uploadimage', upload.single('upload'), function (req, res) {
//     // req.file is the name of your file in the form above, here 'uploaded_file'
//     // req.body will hold the text fields, if there were any

//     try {
//         console.log(req.file.path)
//         res.status(201).json(path.join(__dirname, '..', req.file.path))
//     } catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// });


app.put('/uploadimage', upload.single('upload'), updateImage);

app.get('/getimage', getimage)

// router.route('/getimage')
//     .get(getImage)

const connectDB = require('./config/dbconnect');
const { getImage } = require('./controller/imageController');
connectDB();
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})


//app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
