// Tests for jsonschema.js

var assert = require("test/assert");
var log = require("oil/log");

var jsonschema = require('jsonschema');  // under test

exports.testValidate = function() {
}

if (require.main === module.id) {
    require("test/runner").run(exports);
}
