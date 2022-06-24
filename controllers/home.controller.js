exports.getHomeController = (req, res) => {
	res.status(200).json({ message: "Hello you are in home route" });
};
