var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeMinute.every(step) returns every stepth minute, starting with the first minute of the hour", function(test) {
  test.deepEqual(time.timeMinute.every(15).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 30, 13, 57)), [date.local(2008, 11, 30, 13, 0), date.local(2008, 11, 30, 13, 15), date.local(2008, 11, 30, 13, 30), date.local(2008, 11, 30, 13, 45)]);
  test.deepEqual(time.timeMinute.every(30).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 30, 13, 57)), [date.local(2008, 11, 30, 13, 0), date.local(2008, 11, 30, 13, 30)]);
  test.end();
});

tape("timeMinute.range(start, stop) returns every minute crossing the daylight savings boundary", function(test) {
  test.deepEqual(time.timeMinute.range(new Date(1478422800000 - 2 * 6e4), new Date(1478422800000 + 2 * 6e4)), [
    new Date(1478422680000), // Sun Nov 06 2016 01:58:00 GMT-0700 (PDT)
    new Date(1478422740000), // Sun Nov 06 2016 01:59:00 GMT-0700 (PDT)
    new Date(1478422800000), // Sun Nov 06 2016 01:00:00 GMT-0800 (PDT)
    new Date(1478422860000)  // Sun Nov 06 2016 01:01:00 GMT-0800 (PDT)
  ]);
  test.end();
});
