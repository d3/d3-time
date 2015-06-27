var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("wednesdays in an alias for wednesday.range", function(test) {
  test.equal(time.wednesdays, time.wednesday.range);
  test.end();
});

tape("wednesday.floor(date) returns wednesdays", function(test) {
  test.dateEqual(time.wednesday.floor(date.local(2011, 00, 03, 23, 59, 59)), date.local(2010, 11, 29));
  test.dateEqual(time.wednesday.floor(date.local(2011, 00, 04, 00, 00, 00)), date.local(2010, 11, 29));
  test.dateEqual(time.wednesday.floor(date.local(2011, 00, 04, 00, 00, 01)), date.local(2010, 11, 29));
  test.dateEqual(time.wednesday.floor(date.local(2011, 00, 04, 23, 59, 59)), date.local(2010, 11, 29));
  test.dateEqual(time.wednesday.floor(date.local(2011, 00, 05, 00, 00, 00)), date.local(2011, 00, 05));
  test.dateEqual(time.wednesday.floor(date.local(2011, 00, 05, 00, 00, 01)), date.local(2011, 00, 05));
  test.end();
});
