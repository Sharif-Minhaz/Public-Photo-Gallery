const homeRoute = require("./home.route");
const uploadRoute = require("./upload.route");

const routes = [
	{
		url: "/",
		handler: homeRoute,
	},
	{
		url: "/upload/",
		handler: uploadRoute,
	},
];

module.exports = (app) => {
	routes.forEach((route) => {
		app.use(route.url, route.handler);
	});
};
