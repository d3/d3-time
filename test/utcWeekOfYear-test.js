var tape = require("tape"),
    time = require("../");

tape("utcWeekOfYear is an alias for utcSundayOfYear", function(test) {
  test.equal(time.utcWeekOfYear, time.utcSundayOfYear);
  test.end();
});
