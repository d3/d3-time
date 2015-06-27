var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcTuesdays in an alias for utcTuesday.range", function(test) {
  test.equal(time.utcTuesdays, time.utcTuesday.range);
  test.end();
});

tape("utcTuesday.floor(date) returns tuesdays", function(test) {
  test.dateEqual(time.utcTuesday.floor(date.utc(2011, 00, 02, 23, 59, 59)), date.utc(2010, 11, 28));
  test.dateEqual(time.utcTuesday.floor(date.utc(2011, 00, 03, 00, 00, 00)), date.utc(2010, 11, 28));
  test.dateEqual(time.utcTuesday.floor(date.utc(2011, 00, 03, 00, 00, 01)), date.utc(2010, 11, 28));
  test.dateEqual(time.utcTuesday.floor(date.utc(2011, 00, 03, 23, 59, 59)), date.utc(2010, 11, 28));
  test.dateEqual(time.utcTuesday.floor(date.utc(2011, 00, 04, 00, 00, 00)), date.utc(2011, 00, 04));
  test.dateEqual(time.utcTuesday.floor(date.utc(2011, 00, 04, 00, 00, 01)), date.utc(2011, 00, 04));
  test.end();
});
