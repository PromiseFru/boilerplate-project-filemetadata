'use strict';

var express = require('express');
var upload = require("express-fileupload");
var cors = require('cors');

// require and use "multer"...

var app = express();

app.use(upload());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', (req, res) => {
    if(!req.files) {
        res.json({
            error: "No file uploaded"
        });
    }else {
        res.json({
            name: req.files.upfile.name,
            size: req.files.upfile.size,
            type: req.files.upfile.mimetype
        });
    }
  });

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
