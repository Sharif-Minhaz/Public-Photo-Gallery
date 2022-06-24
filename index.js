const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const setRoutes = require("./routes/routes");
const setMiddlewares = require("./middlewares/middlewares");

// set middlewares & routes
setRoutes(app);
setMiddlewares(app);

app.use((req, res, next) => {
	res.status(404).json({ message: "Page not found" });
});

app.use((err, req, res, next) => {
	res.status(500).json({ message: "Internal server error", error: err });
});

mongoose
	.connect(config.db.url)
	.then(() => {
		app.listen(config.app.port, () => {
			console.info(`App is running on http://localhost:${config.app.port}`);
		});
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
