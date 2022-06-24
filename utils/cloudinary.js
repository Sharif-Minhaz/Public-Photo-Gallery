const cloudinary = require("cloudinary").v2;
const config = require("../config/config");

cloudinary.config({
	cloud_name: config.cloudinary.cloudName,
	api_key: config.cloudinary.cloudApiKey,
	api_secret: config.cloudinary.cloudinarySecret,
});

module.exports = cloudinary;
