const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const setRoutes = require("./routes/routes");
const setMiddlewares = require("./middlewares/middlewares");

app.set("view engine", "ejs");

// set middlewares & routes
setRoutes(app);
setMiddlewares(app);

app.use((req, res, next) => {
	res.status(404).send("<h1>Page not found</h1><a href='/'>Back to home</a>");
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send("<h1>Internal server error</h1><hr />");
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
