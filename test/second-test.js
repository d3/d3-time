var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeSecond.every(step) returns every stepth second, starting with the first second of the minute", function(test) {
  test.deepEqual(time.timeSecond.every(15).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 15), date.local(2008, 11, 30, 12, 37, 30), date.local(2008, 11, 30, 12, 37, 45)]);
  test.deepEqual(time.timeSecond.every(30).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 30)]);
  test.end();
});

tape("timeSecond.range(start, stop) returns every second crossing the daylight savings boundary", function(test) {
  test.deepEqual(time.timeSecond.range(new Date(1478422800000 - 2 * 1e3), new Date(1478422800000 + 2 * 1e3)), [
    new Date(1478422798000), // Sun Nov 06 2016 01:59:58 GMT-0700 (PDT)
    new Date(1478422799000), // Sun Nov 06 2016 01:59:59 GMT-0700 (PDT)
    new Date(1478422800000), // Sun Nov 06 2016 01:00:00 GMT-0800 (PDT)
    new Date(1478422801000)  // Sun Nov 06 2016 01:00:01 GMT-0800 (PDT)
  ]);
  test.end();
});
