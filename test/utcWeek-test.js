var tape = require("tape"),
    time = require("../");

tape("utcWeek is an alias for utcSunday", function(test) {
  test.equal(time.utcWeek, time.utcSunday);
  test.end();
});
