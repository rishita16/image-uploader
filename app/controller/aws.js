var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var S3 = new AWS.S3();

var uploads = function(req,res) {
  var s3 = new AWS.S3(),
  file = req.file,
  body = req.file.buffer;


  var params = {
    Bucket: 'jeditor.image.test',
    Key: file.originalname,
    Body:body
  };

  s3.listBuckets(function(err, response) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(response);           // successful response
   });
}

module.exports=uploads;