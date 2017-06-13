var jwt = require('express-jwt');
var credentials = require('../../config/config.js');
var jwtCheck = jwt(credentials.jwtAuth0);

// enforce on all endpoints


module.exports = jwtCheck;