var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("minute.every(step) returns every stepth minute, starting with the first minute of the hour", function(test) {
  test.deepEqual(time.minute.every(15).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 30, 13, 57)), [date.local(2008, 11, 30, 13, 0), date.local(2008, 11, 30, 13, 15), date.local(2008, 11, 30, 13, 30), date.local(2008, 11, 30, 13, 45)]);
  test.deepEqual(time.minute.every(30).range(date.local(2008, 11, 30, 12, 47), date.local(2008, 11, 30, 13, 57)), [date.local(2008, 11, 30, 13, 0), date.local(2008, 11, 30, 13, 30)]);
  test.end();
});
