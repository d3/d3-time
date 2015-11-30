var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("week is an alias for sunday", function(test) {
  test.equal(time.week, time.sunday);
  test.end();
});

tape("week.every(step) returns every stepth Sunday, starting with the first Sunday of the month", function(test) {
  test.deepEqual(time.week.every(2).range(date.local(2008, 11, 3), date.local(2009, 1, 5)), [date.local(2008, 11, 7), date.local(2008, 11, 21), date.local(2009, 0, 4), date.local(2009, 0, 18), date.local(2009, 1, 1)]);
  test.end();
});
