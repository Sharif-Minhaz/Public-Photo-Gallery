require("dotenv").config();

const dev = {
	app: {
		port: process.env.PORT || 8080,
	},
	db: {
		url: process.env.DB_URL || "mongodb://localhost:27017/userPhotoDB",
	},
	cloudinary: {
		cloudName: process.env.CLOUD_NAME,
		cloudApiKey: process.env.CLOUD_API_KEY,
		cloudinarySecret: process.env.CLOUDINARY_SECRET,
	},
};

module.exports = dev;
