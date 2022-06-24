const homeRoute = require("./home.route");

const routes = [
	{
		url: "/",
		handler: homeRoute,
	},
];

module.exports = (app) => {
	routes.forEach((route) => {
		app.use(route.url, route.handler);
	});
};
