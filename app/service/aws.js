var AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});
var fs = require('fs');
var Promise = require('promise');
var async = require('async');
var md5 = require('md5');
var timestamp = new Date().getTime().toString();
var S3 = new AWS.S3();


var uploads = function(req,res) {
  files = req.files;
    files.forEach(function(fieldname) {
       filename = fieldname.originalname.substr(0,(fieldname.originalname).indexOf("."));
       extension = fieldname.originalname.substr((fieldname.originalname).lastIndexOf(".")+1);
       body = fieldname.buffer;
       var loc = (md5(fieldname.originalname + timestamp)).substr(0, 6) + '/' + filename; 
      
       var params_target = { 
        Bucket: 'testing.images.target/' + loc,
        Key:'original.'+ extension,
        Body:body,
        ACL: 'public-read',
        CacheControl:'max-age=32000000',
        ContentType:fieldname.mimetype,
        StorageClass: 'REDUCED_REDUNDANCY',
       };

      var params_public = {
        Bucket: 'testing.images.public/' + loc,
        Key:'original.'+ extension,
        Body:body,
        ACL: 'public-read',
        CacheControl:'max-age=32000000',
        ContentType: fieldname.mimetype,
        StorageClass: 'REDUCED_REDUNDANCY',
      };
      
      async.series([
        function(callback) {
        S3.upload(params_public,function(err,response) {
          if(err){
            console.log(err);
          } else { 
          console.log({'publicBucket': response.Location});
          callback(null);
          }
        }); 
        
        },

      function(callback) {
        S3.upload(params_target,function(err,response) {
           console.log({'targetBucket': response.Location});
           callback(null);
         });  
        
      }
      ]);
  });
}
                                                                            


module.exports = uploads;


