// Tests for jsonschema.js

var assert = require("test/assert");
var json = require("json");
var log = require("oil/log");

var jsonschema = require('jsonschema');  // under test

exports.testValidate = function() {

  var schema = {
    "description":"A person",
   "type":"object",

   "properties": {
     "name": {"type":"string"},
     "age" : {"type":"integer",
              "maximum":125}
    }
  };

	var res4 = JSONSchema.validate({'name': 'Bob'}, schema);
  print(json.stringify(res4));
	var res5 = JSONSchema.validate({'name': 'Bob', 'age': 30}, schema);
  print(json.stringify(res5));
	var res6 = JSONSchema.validate({'name': 'Bob', 'age': 'aa'}, schema);
  print(json.stringify(res6));
	var res7 = JSONSchema.validate({'name': 3, 'age': 3}, schema);
  print(json.stringify(res7));
}

if (require.main === module.id) {
    require("test/runner").run(exports);
}
