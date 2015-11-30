var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcWeek is an alias for utcSunday", function(test) {
  test.equal(time.utcWeek, time.utcSunday);
  test.end();
});

tape("utcWeek.every(step) returns every stepth Sunday, starting with the first Sunday of the month", function(test) {
  test.deepEqual(time.utcWeek.every(2).range(date.utc(2008, 11, 3), date.utc(2009, 1, 5)), [date.utc(2008, 11, 7), date.utc(2008, 11, 21), date.utc(2009, 0, 4), date.utc(2009, 0, 18), date.utc(2009, 1, 1)]);
  test.end();
});
