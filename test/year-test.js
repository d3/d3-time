var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeYear.every(step) returns every stepth year, starting with year zero", function(test) {
  test.deepEqual(time.timeYear.every(5).range(date.local(2008), date.local(2023)), [date.local(2010), date.local(2015), date.local(2020)]);
  test.end();
});
