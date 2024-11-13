var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
var Spice = require('./models/spices');

mongoose.connect(connectionString);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
console.log("Connected to DB succeeded.");
  
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spicesRouter = require('./routes/spices');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/spices', spicesRouter);  
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);


async function recreateDB() {
  // Delete everything
  await Spice.deleteMany();
  let instance1 = new Spice({ 
    spice_name: "Clove",
        spice_origin: "Andhra Pradesh", 
        spice_cost: 40
  });
  instance1.save().then(doc=>{
    console.log("First object saved")
  }).catch(err=>{
    console.error(err)
  })

  let instance2 = new Spice({
    spice_name: "Star anise", 
        spice_origin: "Himalayas", 
        spice_cost: 60
  });
  instance2.save().then(doc=>{
    console.log("Second object saved")
  }).catch(err=>{
    console.error(err)
  })

  let instance3 = new Spice({ 
    spice_name: "Caraway", 
        spice_origin: "Rajasthan", 
        spice_cost: 80  
  });
  instance3.save().then(doc=>{
    console.log("Third object saved")
  }).catch(err=>{
    console.error(err)
  })
}
let reseed = true;
if (reseed) { recreateDB(); }

//routes/resource.js
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var resourceRouter = require('./routes/resource');
app.use('/resource', resourceRouter);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the app for use in other files
module.exports = app;
