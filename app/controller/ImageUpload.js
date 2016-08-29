const uploads = require('../service/aws.js');

function uploadimage(req,res) {
  uploads(req,res);
  console.log("res is ------------",response);   
}

module.exports = uploadimage;
