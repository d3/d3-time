var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("thursdays in an alias for thursday.range", function(test) {
  test.equal(time.thursdays, time.thursday.range);
  test.end();
});

tape("thursday.floor(date) returns thursdays", function(test) {
  test.dateEqual(time.thursday.floor(date.local(2011, 00, 04, 23, 59, 59)), date.local(2010, 11, 30));
  test.dateEqual(time.thursday.floor(date.local(2011, 00, 05, 00, 00, 00)), date.local(2010, 11, 30));
  test.dateEqual(time.thursday.floor(date.local(2011, 00, 05, 00, 00, 01)), date.local(2010, 11, 30));
  test.dateEqual(time.thursday.floor(date.local(2011, 00, 05, 23, 59, 59)), date.local(2010, 11, 30));
  test.dateEqual(time.thursday.floor(date.local(2011, 00, 06, 00, 00, 00)), date.local(2011, 00, 06));
  test.dateEqual(time.thursday.floor(date.local(2011, 00, 06, 00, 00, 01)), date.local(2011, 00, 06));
  test.end();
});
