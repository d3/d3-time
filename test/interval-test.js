var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("interval(floor, offset) returns a custom interval", function(test) {
  var i = time.interval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  });
  test.deepEqual(i(date.utc(2015, 0, 1, 12, 34, 56, 789)), date.utc(2015, 0, 1, 12));
  test.end();
});

tape("interval(floor, offset) does not define a count method", function(test) {
  var i = time.interval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  });
  test.ok(!("count" in i));
  test.end();
});

tape("interval(floor, offset) floors the step before passing it to offset", function(test) {
  var steps = [], i = time.interval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    steps.push(+step), date.setUTCHours(date.getUTCHours() + step);
  });
  test.deepEqual(i.offset(date.utc(2015, 0, 1, 12, 34, 56, 789), 1.5), date.utc(2015, 0, 1, 13, 34, 56, 789));
  test.deepEqual(i.range(date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 15), 1.5), [date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 13), date.utc(2015, 0, 1, 14)]);
  test.ok(steps.every(function(step) { return step === 1; }));
  test.end();
});

tape("interval(floor, offset, count) defines a count method", function(test) {
  var i = time.interval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  }, function(start, end) {
    return (end - start) / 36e5;
  });
  test.equal(i.count(date.utc(2015, 0, 1, 12, 34), date.utc(2015, 0, 1, 15, 56)), 3);
  test.end();
});

tape("interval(floor, offset, count) floors dates before passing them to count", function(test) {
  var dates = [], i = time.interval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  }, function(start, end) {
    return dates.push(new Date(+start), new Date(+end)), (end - start) / 36e5;
  });
  i.count(date.utc(2015, 0, 1, 12, 34), date.utc(2015, 0, 1, 15, 56));
  test.deepEqual(dates, [date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 15)]);
  test.end();
});
