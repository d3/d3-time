var tape = require("tape"),
    time = require("../");

tape("week is an alias for sunday", function(test) {
  test.equal(time.week, time.sunday);
  test.end();
});
