const PhotoInfo = require("../models/PhotoInfo.model");

exports.getHomeController = async (req, res, next) => {
	try {
		const imagesInfo = await PhotoInfo.find();
		res.render("pages/index", { imagesInfo });
	} catch (err) {
		next(err);
	}
};
