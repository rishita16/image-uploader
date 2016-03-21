var AWS = require('aws-sdk');
var fs = require('fs');
var Promise = require('promise');
var S3 = new AWS.S3();
var md5 = require('md5');
var timestamp = new Date().getTime().toString();

var uploads = function(req,res) {

  return new Promise(function(resolve, reject) {
    file = req.file,
    body = req.file.buffer;
    extension = file.originalname.substr((file.originalname).lastIndexOf(".")+1);
    var location = (md5(file.originalname + timestamp)).substr(0, 6) + '/' + file.originalname;

    var params_upload = {
      Bucket: 'test.bucket1' + location,
      Key:'original.'+ extension,
      Body:body,
      ACL: 'public-read',
      CacheControl:'max-age=32000000',
      ContentType: file.mimetype, 
      StorageClass: 'REDUCED_REDUNDANCY',
    };

    S3.putObject(params_upload, function(err, response) {      
      if (err) {
        reject(err); 
      } else {
        resolve(response.Location);
      }
    });

    var params_public = {
      Bucket: 'test.bucket2' + location,
      Key:'original.'+ extension,
      Body:body,
      ACL: 'public-read',
      CacheControl: 'max-age=32000000',
      ContentType:file.mimetype, 
      StorageClass: 'REDUCED_REDUNDANCY',
    };

    S3.putObject(params_public, function(err, response) {
      if (err) {
        reject(err); 
      } else {
        resolve(response.Location);
      }
    });

  });  

}

module.exports = uploads;