
const dbUtils = require('../db/dbController');
const multer = require('multer');
const path = require('path');

const UploadFlatImage = async (req, res) => {
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'FlatImages/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname))
        }
    })
    let upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            var ext = path.extname(file.originalname);
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.mp4' && ext !== '.avi') {
                cb(null, false)
            } else {
                cb(null, true)
            }
        }
    }).any();

    let imageFiles = [];

    upload(req, res, function (err) {
        if (err) {
            return res.end('Error');
        } else {
            req.files.forEach(function (item) {
                console.log(item);
                imageFiles.push(item.filename);
            });
            // res.end(imageFiles.slice(0, -1));
            return res.send({ 'status': 200, 'response': imageFiles });
        }
    });
}

module.exports = {
    UploadFlatImage,
}
