const mongoose =  require('mongoose')
const Schema = mongoose.Schema;
const UserInfo= new Schema({
    email: {
        type:String,
        required: true
    },
    passWord: {
        type:String,
        required: true
    }
});
const User = mongoose.model('User',UserInfo);
module.exports = User