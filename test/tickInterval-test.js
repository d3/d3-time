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
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2014, 0, 1), 12),
                                       {interval: time.timeMonth, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2014, 0, 1), 11),
                                       {interval: time.timeMonth, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2014, 0, 1), 5),
                                       {interval: time.timeMonth, step: 3});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2014, 0, 1), 2),
                                       {interval: time.timeYear, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2014, 0, 1), 1),
                                       {interval: time.timeYear, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2013, 3, 1), 1),
                                       {interval: time.timeMonth, step: 3});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2013, 3, 1), 3),
                                       {interval: time.timeMonth, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2013, 3, 1), 7),
                                       {interval: time.timeWeek, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2013, 3, 1), 8),
                                       {interval: time.timeWeek, step: 1});
  test.deepEqual(time.timeTickInterval(date.local(2013, 0, 1),
                                       date.local(2013, 3, 1), 26),
                                       {interval: time.timeDay, step: 2});
  test.end();
});

