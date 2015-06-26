var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcMonday.floor(date) returns mondays", function(test) {
  test.dateEqual(time.utcMonday.floor(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2010, 11, 27));
  test.dateEqual(time.utcMonday.floor(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2010, 11, 27));
  test.dateEqual(time.utcMonday.floor(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2010, 11, 27));
  test.dateEqual(time.utcMonday.floor(date.utc(2011, 00, 02, 23, 59, 59)), date.utc(2010, 11, 27));
  test.dateEqual(time.utcMonday.floor(date.utc(2011, 00, 03, 00, 00, 00)), date.utc(2011, 00, 03));
  test.dateEqual(time.utcMonday.floor(date.utc(2011, 00, 03, 00, 00, 01)), date.utc(2011, 00, 03));
  test.end();
});
