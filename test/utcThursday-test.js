var tape = require("tape"),
    time = require("../"),
    date = require("./date");

require("./dateEqual");

tape("utcThursday.floor(date) returns thursdays", function(test) {
  test.dateEqual(time.utcThursday.floor(date.utc(2011, 00, 04, 23, 59, 59)), date.utc(2010, 11, 30));
  test.dateEqual(time.utcThursday.floor(date.utc(2011, 00, 05, 00, 00, 00)), date.utc(2010, 11, 30));
  test.dateEqual(time.utcThursday.floor(date.utc(2011, 00, 05, 00, 00, 01)), date.utc(2010, 11, 30));
  test.dateEqual(time.utcThursday.floor(date.utc(2011, 00, 05, 23, 59, 59)), date.utc(2010, 11, 30));
  test.dateEqual(time.utcThursday.floor(date.utc(2011, 00, 06, 00, 00, 00)), date.utc(2011, 00, 06));
  test.dateEqual(time.utcThursday.floor(date.utc(2011, 00, 06, 00, 00, 01)), date.utc(2011, 00, 06));
  test.end();
});
