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
		cloudinaryId: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("photoInfo", photoInfoSchema);