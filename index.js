const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerNavigation = require('./src/');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path')


////
app.use(cors())
app.use(function(req, res, next){
  // res.header('Access-Control-Allow-Origin', 'localhost:3030')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.listen(80, function(){
  console.log('CORS Enable');
})
///

app.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1');
});

const public = express.static(path.join(__dirname, '/public/images'))
app.use('/public/images', public)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routerNavigation);
