var AWS = require('aws-sdk');
var fs = require('fs');
var S3 = new AWS.S3();

var uploads = function(req,res) {
  var s3 = new AWS.S3(),
  file = req.file;

var params_upload = {
  Bucket:'jeditor.image.test',
  Key: file.originalname,
  ACL: 'private',
  Body: new Buffer('JSON>stringify(file)') ,
  CacheControl:'max-age=32000000',
  ContentType: file.mimetype, 
  StorageClass: 'REDUCED_REDUNDANCY',
};

  s3.putObject(params_upload, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });


var params_public = {
  Bucket:'jeditor.image.test',
  Key: file.originalname,
  ACL: 'public-read',
  Body: new Buffer('JSON.stringify(file)'),
  CacheControl: 'max-age=32000000',
  ContentType:file.mimetype, 
  StorageClass: 'REDUCED_REDUNDANCY',
};

  s3.putObject(params_public, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

}
module.exports = uploads;
