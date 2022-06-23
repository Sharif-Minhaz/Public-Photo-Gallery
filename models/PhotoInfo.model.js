const { model, Schema } = require("mongoose");

const photoInfoSchema = new Schema(
	{
		uploader: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const PhotoInfo = model("photoInfo", photoInfoSchema);

module.exports = PhotoInfo;
