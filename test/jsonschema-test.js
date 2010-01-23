// Tests for jsonschema.js

var assert = require("test/assert");
var json = require("json");
var log = require("oil/log");

var jsonschema = require('jsonschema');  // under test

exports.testValidate = function() {
  var simpleObj = {
    "name" : "John Doe",
    "age" : 30,
    "schema" : {
      "name": {"type":"string",
               "required":true},
      "age" : {"type":"number",
               "maximum":125}
    }
  };

  var biggerObj = {
    "name" : "John Doe",
    "born" : "1979-03-23T06:26:07Z",
    "gender" : "mal",
    "address" : {"street":"123 S Main St",
      "city":33,//"Springfield",
      "state":"CA"}
  };

  var biggerSchema = {
      "name": {"type":"string", length: 5,
               "required":true},
                "final":true,
      "born" : {"type":["number","string"], //allow for a numeric year, or a full date
        "format":"date", //format when a string value is used
        "minimum":1900, //min/max for when a number value is used
        "maximum":2010
      },
      "gender" : {"type":"string",
                  "options":["male","female"]},
      "address" : {"type":
          {"street":{"type":"string"},
           "city":{"type":"string"},
           "state":{"type":"string"}},
         "format":"address"}
  };

	var res1 = JSONSchema.validate(simpleObj);
  print(json.stringify(res1));
	var res2 = JSONSchema.validate(biggerObj, biggerSchema);
  print(json.stringify(res2));
	var res3 = JSONSchema.validate({}, biggerSchema);
  print(json.stringify(res3));
}

if (require.main === module.id) {
    require("test/runner").run(exports);
}
