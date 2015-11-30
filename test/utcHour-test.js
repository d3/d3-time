var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcHour.every(step) returns every stepth hour, starting with the first hour of the day", function(test) {
  test.deepEqual(time.utcHour.every(4).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 31, 13, 57)), [date.utc(2008, 11, 30, 16), date.utc(2008, 11, 30, 20), date.utc(2008, 11, 31, 0), date.utc(2008, 11, 31, 4), date.utc(2008, 11, 31, 8), date.utc(2008, 11, 31, 12)]);
  test.deepEqual(time.utcHour.every(12).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 31, 13, 57)), [date.utc(2008, 11, 31, 0), date.utc(2008, 11, 31, 12)]);
  test.end();
});
