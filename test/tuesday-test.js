var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("tuesday.floor(date) returns tuesdays", function(test) {
  test.dateEqual(time.tuesday.floor(date.local(2011, 00, 02, 23, 59, 59)), date.local(2010, 11, 28));
  test.dateEqual(time.tuesday.floor(date.local(2011, 00, 03, 00, 00, 00)), date.local(2010, 11, 28));
  test.dateEqual(time.tuesday.floor(date.local(2011, 00, 03, 00, 00, 01)), date.local(2010, 11, 28));
  test.dateEqual(time.tuesday.floor(date.local(2011, 00, 03, 23, 59, 59)), date.local(2010, 11, 28));
  test.dateEqual(time.tuesday.floor(date.local(2011, 00, 04, 00, 00, 00)), date.local(2011, 00, 04));
  test.dateEqual(time.tuesday.floor(date.local(2011, 00, 04, 00, 00, 01)), date.local(2011, 00, 04));
  test.end();
});
