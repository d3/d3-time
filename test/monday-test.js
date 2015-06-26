var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("monday.floor(date) returns mondays", function(test) {
  test.dateEqual(time.monday.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 02, 23, 59, 59)), date.local(2010, 11, 27));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 03, 00, 00, 00)), date.local(2011, 00, 03));
  test.dateEqual(time.monday.floor(date.local(2011, 00, 03, 00, 00, 01)), date.local(2011, 00, 03));
  test.end();
});
