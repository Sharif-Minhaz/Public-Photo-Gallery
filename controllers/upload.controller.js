const PhotoInfo = require("../models/PhotoInfo.model");
const cloudinary = require("../utils/cloudinary");

exports.postImagesController = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path);

		let photoInfo = new PhotoInfo({
			uploader: req.body.name,
			image: result.secure_url,
			cloudinaryId: result.public_id,
		});

		await photoInfo.save();
		res.json(result);
	} catch (err) {
		next(err);
	}
};
