const PhotoInfo = require("../models/PhotoInfo.model");
const cloudinary = require("../utils/cloudinary");

exports.postImagesController = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path, { folder: "photoGallery" });

		let photoInfo = new PhotoInfo({
			uploader: req.body.name,
			image: result.secure_url,
			cloudinaryId: result.public_id,
		});

		await photoInfo.save();
		res.redirect("/");
	} catch (err) {
		next(err);
	}
};

exports.deleteImageGetController = async (req, res, next) => {
	const { id } = req.params;
	try {
		const photoInfo = await PhotoInfo.findById(id);
		// destroy the cloudinary image
		await cloudinary.uploader.destroy(photoInfo.cloudinaryId);
		// remove the photoInfo from database
		await photoInfo.remove();
		res.redirect("/");
	} catch (err) {
		next(err);
	}
};
