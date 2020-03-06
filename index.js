const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerNavigation = require('./src/');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv');


////
app.use(cors())
app.use(function(req, res, next){
  // res.header('Access-Control-Allow-Origin', 'localhost:3030')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// app.listen(80, function(){
//   console.log('CORS Enable');
// })
///

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

app.listen(port, host, () => {
  console.log(`Listening on ${host}`)
});

const public = express.static(path.join(__dirname,'/public/images'))
app.use('/public/images', public)


// app.use(express.static('/public/images'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routerNavigation);
