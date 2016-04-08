	const uploads = require('../service/aws.js');

	function uploadimage(req,res) {
		uploads(req,res);
	}

	module.exports = uploadimage;


