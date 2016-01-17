var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("tickInterval(start, stop, count) returns null for invalid dates", function(test) {
  test.equal(time.timeTickInterval(NaN, date.local(2010, 11, 01), 1), null);
  test.equal(time.timeTickInterval(date.local(2010, 11, 01), NaN, 1), null);
  test.end();
});

tape("tickInterval(start, stop, count) returns null if count is not positive", function(test) {
  test.equal(time.timeTickInterval(date.local(2010, 11, 01), date.local(2011, 11, 01), NaN), null);
  test.equal(time.timeTickInterval(date.local(2010, 11, 01), date.local(2011, 11, 01), -1), null);
  test.equal(time.timeTickInterval(date.local(2010, 11, 01), date.local(2011, 11, 01), Infinity), null);
  test.equal(time.timeTickInterval(date.local(2010, 11, 01), date.local(2011, 11, 01), 0), null);
  test.end();
});

tape("tickInterval(start, stop, count) returns null if start === stop", function(test) {
  var d = date.local(2015, 5, 5);
  test.equal(time.timeTickInterval(d, d, 1), null);
  test.equal(time.timeTickInterval(d, d, 10), null);
  test.end();
});

tape("tickInterval(start, stop, count) returns the right interval when start < stop", function(test) {
  var d1 = date.local(2015, 5, 5);
  var d2 = date.local(2015, 5, 6);
  var ticks = time.timeTicks(d1, d2, 30)
    .map(function(d) { return d.getHours(); });
  test.comment(12 + " ticks from " + d1.toDateString() + " to " + d2.toDateString());
  test.comment(ticks);
  test.comment("number of ticks is " + ticks.length);
  test.end();
});

