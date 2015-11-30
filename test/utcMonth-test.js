var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcMonth.every(step) returns every stepth month, starting with the first month of the year", function(test) {
  test.deepEqual(time.utcMonth.every(3).range(date.utc(2008, 11, 3), date.utc(2010, 6, 5)), [date.utc(2009, 0, 1), date.utc(2009, 3, 1), date.utc(2009, 6, 1), date.utc(2009, 9, 1), date.utc(2010, 0, 1), date.utc(2010, 3, 1), date.utc(2010, 6, 1)]);
  test.end();
});
