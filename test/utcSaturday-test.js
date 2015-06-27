var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcSaturdays in an alias for utcSaturday.range", function(test) {
  test.equal(time.utcSaturdays, time.utcSaturday.range);
  test.end();
});

tape("utcSaturday.floor(date) returns saturdays", function(test) {
  test.dateEqual(time.utcSaturday.floor(date.utc(2011, 00, 06, 23, 59, 59)), date.utc(2011, 00, 01));
  test.dateEqual(time.utcSaturday.floor(date.utc(2011, 00, 07, 00, 00, 00)), date.utc(2011, 00, 01));
  test.dateEqual(time.utcSaturday.floor(date.utc(2011, 00, 07, 00, 00, 01)), date.utc(2011, 00, 01));
  test.dateEqual(time.utcSaturday.floor(date.utc(2011, 00, 07, 23, 59, 59)), date.utc(2011, 00, 01));
  test.dateEqual(time.utcSaturday.floor(date.utc(2011, 00, 08, 00, 00, 00)), date.utc(2011, 00, 08));
  test.dateEqual(time.utcSaturday.floor(date.utc(2011, 00, 08, 00, 00, 01)), date.utc(2011, 00, 08));
  test.end();
});
