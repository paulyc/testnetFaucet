var Joi = require("joi");

homeHandler = require("./handlers/home.js");
withdrawHandler = require("./handlers/withdraw.js");

if (process.env.NODE_ENV !== "production") {
  //For development only routes.
}

//We should add a base url to url to these -- something like oururl.com/api/v1/
var routes = [
  {
    method: "GET",
    path: "/",
    handler: homeHandler
  },
  {
    method: "POST",
    path: "/withdraw",
    handler: withdrawHandler,
    config: {
      validate: {
        payload: {
          address: Joi.string(),
          amount: Joi.string()
        }
      }
    }
  },
  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: ".",
        redirectToSlash: true,
        index: true
      }
    }
  }
];

//Add our development only routes here.
if (process.env.NODE_ENV !== "production") {
  //Dev only routes go here.
}

module.exports = routes;
