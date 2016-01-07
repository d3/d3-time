var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeSecond.every(step) returns every stepth second, starting with the first second of the minute", function(test) {
  test.deepEqual(time.timeSecond.every(15).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 15), date.local(2008, 11, 30, 12, 37, 30), date.local(2008, 11, 30, 12, 37, 45)]);
  test.deepEqual(time.timeSecond.every(30).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 30)]);
  test.end();
});
