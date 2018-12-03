global.window = global;
global.assert = require('chai').assert;
require('../app.js');
require('./app.spec.js');