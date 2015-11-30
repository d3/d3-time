var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcSecond.every(step) returns every stepth second, starting with the first second of the minute", function(test) {
  test.deepEqual(time.utcSecond.every(15).range(date.utc(2008, 11, 30, 12, 36, 47), date.utc(2008, 11, 30, 12, 37, 57)), [date.utc(2008, 11, 30, 12, 37, 0), date.utc(2008, 11, 30, 12, 37, 15), date.utc(2008, 11, 30, 12, 37, 30), date.utc(2008, 11, 30, 12, 37, 45)]);
  test.deepEqual(time.utcSecond.every(30).range(date.utc(2008, 11, 30, 12, 36, 47), date.utc(2008, 11, 30, 12, 37, 57)), [date.utc(2008, 11, 30, 12, 37, 0), date.utc(2008, 11, 30, 12, 37, 30)]);
  test.end();
});
