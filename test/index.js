var test = require("tape");

var browserEditorTest = require("../index.js");

test("browserEditorTest is a function", function (t) {
    t.equal(typeof browserEditorTest, "function");
    t.equal(browserEditorTest(2), 4);
    t.end();
});
