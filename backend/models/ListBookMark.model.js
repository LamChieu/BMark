const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BookMark = new Schema ({
    folder: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String 
    },
    createAt: {
        type: Date,
        default: Date.now
    }

});
const ListBookMark = mongoose.model('ListBookMark', BookMark);
module.exports = ListBookMark