var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcMinute.every(step) returns every stepth minute, starting with the first minute of the hour", function(test) {
  test.deepEqual(time.utcMinute.every(15).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 30, 13, 57)), [date.utc(2008, 11, 30, 13, 0), date.utc(2008, 11, 30, 13, 15), date.utc(2008, 11, 30, 13, 30), date.utc(2008, 11, 30, 13, 45)]);
  test.deepEqual(time.utcMinute.every(30).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 30, 13, 57)), [date.utc(2008, 11, 30, 13, 0), date.utc(2008, 11, 30, 13, 30)]);
  test.end();
});
