var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcFriday.floor(date) returns fridays", function(test) {
  test.dateEqual(time.utcFriday.floor(date.utc(2011, 00, 05, 23, 59, 59)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcFriday.floor(date.utc(2011, 00, 06, 00, 00, 00)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcFriday.floor(date.utc(2011, 00, 06, 00, 00, 01)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcFriday.floor(date.utc(2011, 00, 06, 23, 59, 59)), date.utc(2010, 11, 31));
  test.dateEqual(time.utcFriday.floor(date.utc(2011, 00, 07, 00, 00, 00)), date.utc(2011, 00, 07));
  test.dateEqual(time.utcFriday.floor(date.utc(2011, 00, 07, 00, 00, 01)), date.utc(2011, 00, 07));
  test.end();
});
