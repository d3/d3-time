var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcYear.every(step) returns every stepth year, starting with year zero", function(test) {
  test.deepEqual(time.utcYear.every(5).range(date.utc(2008), date.utc(2023)), [date.utc(2010), date.utc(2015), date.utc(2020)]);
  test.end();
});
