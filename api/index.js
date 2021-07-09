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
      cb(null, './assets/images/productsimages')
  },
  filename: (req, file, cb) => {
      cb(null, '' + Date.now()+file.originalname)
  }
});

// app.use(express.urlencoded({ extended: false }));

// // Serve only the static files form the dist directory
// // Replace the '/dist/<to_your_project_name>'
// app.use(express.static(__dirname + '/dist/myshop'));
// //app.use(express.static('public'));
const upload = multer({ storage: storage });

// app.use('/ftp', express.static('public'));



// const port = process.env.PORT || 4200;
// app.listen(port, () => {
//     console.log('Server is up and running on port ', port);
// })


 
 
app.get('/allen', function(req,res) {
  res.send('allen')
});

app.get('/api', function(req,res) {
  res.send('showing api')
});

app.post('/api', upload.single('file'), function(req,res) {
  console.log(req.file);
  console.log('storage location is ', req.hostname +'/' + req.file.path);
  res.send({name:req.file.filename});
  return
})



module.exports = app;