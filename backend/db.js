let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/BookMark', { useNewUrlParser: true });
let User = require('./models/User.model')
const ListBookMark = require('./models/ListBookMark.model');


// Express Route
const BookMarkRouter = require('./routes/ListBookMark.router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/bookMark', BookMarkRouter)


// PORT
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// User.create({
//  email: 'aygoo9xx@gmail.com',
//  passWord: '123456'
// }, (error, user) => {
//  console.log(error, user)
// })



