
module.exports = (req,res) => {
    // Install express server with
const express = require('express')
const path = require('path');
const multer = require('multer');
var cors = require('cors')
const app = express();

app.use(cors({
  origin: '*'
}));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './src/assets/images/productsimages')
  },
  filename: (req, file, cb) => {
      cb(null, '' + Date.now()+file.originalname)
  }
});

app.use(express.urlencoded({ extended: false }));

const upload = multer({ storage: storage });

  console.log(req.file);
  console.log('storage location is ', req.hostname +'/' + req.file.path);
  res.send({name:req.file.filename});
  return

  };