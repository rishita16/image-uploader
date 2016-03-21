	const uploads = require('../service/aws.js');

	function uploadimage(req,res) {
		uploads(req,res)
		.then(function(response) {
			console.log('Response :', response);
		});
	}

	module.exports = uploadimage; 