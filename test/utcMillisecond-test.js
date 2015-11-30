var tape = require("tape"),
    time = require("../");

tape("utcMillisecond is an alias for millisecond", function(test) {
  test.equal(time.utcMillisecond, time.millisecond);
  test.end();
});
