var tape = require("tape"),
    time = require("../");

tape("weekOfYear is an alias for sundayOfYear", function(test) {
  test.equal(time.weekOfYear, time.sundayOfYear);
  test.end();
});
