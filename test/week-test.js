var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeWeek is an alias for timeSunday", function(test) {
  test.equal(time.timeWeek, time.timeSunday);
  test.end();
});

tape("timeWeek.every(step) returns every stepth Sunday, starting with the first Sunday of the month", function(test) {
  test.deepEqual(time.timeWeek.every(2).range(date.local(2008, 11, 3), date.local(2009, 1, 5)), [date.local(2008, 11, 7), date.local(2008, 11, 21), date.local(2009, 0, 4), date.local(2009, 0, 18), date.local(2009, 1, 1)]);
  test.end();
});
