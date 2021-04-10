const tape = require("tape");
const time = require("../");
const date = require("./date");

tape("utcTicks(start, stop, interval) respects the specified interval", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 1, 0), date.utc(2011, 0, 1, 12, 4, 4), time.utcMinute), [
    date.utc(2011, 0, 1, 12, 1),
    date.utc(2011, 0, 1, 12, 2),
    date.utc(2011, 0, 1, 12, 3),
    date.utc(2011, 0, 1, 12, 4)
  ]);
  test.end();
});

tape("utcTicks(start, stop, interval.every(step)) observes the specified tick interval and step", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 33, 4), time.utcMinute.every(10)), [
    date.utc(2011, 0, 1, 12, 0),
    date.utc(2011, 0, 1, 12, 10),
    date.utc(2011, 0, 1, 12, 20),
    date.utc(2011, 0, 1, 12, 30)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate sub-second ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 1), 4), [
    date.utc(2011, 0, 1, 12, 0, 0,   0),
    date.utc(2011, 0, 1, 12, 0, 0, 200),
    date.utc(2011, 0, 1, 12, 0, 0, 400),
    date.utc(2011, 0, 1, 12, 0, 0, 600),
    date.utc(2011, 0, 1, 12, 0, 0, 800),
    date.utc(2011, 0, 1, 12, 0, 1,   0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-second ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 4), 4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 1),
    date.utc(2011, 0, 1, 12, 0, 2),
    date.utc(2011, 0, 1, 12, 0, 3),
    date.utc(2011, 0, 1, 12, 0, 4)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 5-second ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 20), 4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 5),
    date.utc(2011, 0, 1, 12, 0, 10),
    date.utc(2011, 0, 1, 12, 0, 15),
    date.utc(2011, 0, 1, 12, 0, 20)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 15-second ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 0, 50), 4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 15),
    date.utc(2011, 0, 1, 12, 0, 30),
    date.utc(2011, 0, 1, 12, 0, 45)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 30-second ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 0), date.utc(2011, 0, 1, 12, 1, 50), 4), [
    date.utc(2011, 0, 1, 12, 0, 0),
    date.utc(2011, 0, 1, 12, 0, 30),
    date.utc(2011, 0, 1, 12, 1, 0),
    date.utc(2011, 0, 1, 12, 1, 30)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-minute ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 0, 27), date.utc(2011, 0, 1, 12, 4, 12), 4), [
    date.utc(2011, 0, 1, 12, 1),
    date.utc(2011, 0, 1, 12, 2),
    date.utc(2011, 0, 1, 12, 3),
    date.utc(2011, 0, 1, 12, 4)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 5-minute ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 3, 27), date.utc(2011, 0, 1, 12, 21, 12), 4), [
    date.utc(2011, 0, 1, 12, 5),
    date.utc(2011, 0, 1, 12, 10),
    date.utc(2011, 0, 1, 12, 15),
    date.utc(2011, 0, 1, 12, 20)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 15-minute ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 8, 27), date.utc(2011, 0, 1, 13, 4, 12), 4), [
    date.utc(2011, 0, 1, 12, 15),
    date.utc(2011, 0, 1, 12, 30),
    date.utc(2011, 0, 1, 12, 45),
    date.utc(2011, 0, 1, 13, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 30-minute ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 28, 27), date.utc(2011, 0, 1, 14, 4, 12), 4), [
    date.utc(2011, 0, 1, 12, 30),
    date.utc(2011, 0, 1, 13, 0),
    date.utc(2011, 0, 1, 13, 30),
    date.utc(2011, 0, 1, 14, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-hour ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 12, 28, 27), date.utc(2011, 0, 1, 16, 34, 12), 4), [
    date.utc(2011, 0, 1, 13, 0),
    date.utc(2011, 0, 1, 14, 0),
    date.utc(2011, 0, 1, 15, 0),
    date.utc(2011, 0, 1, 16, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 3-hour ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 14, 28, 27), date.utc(2011, 0, 2, 1, 34, 12), 4), [
    date.utc(2011, 0, 1, 15, 0),
    date.utc(2011, 0, 1, 18, 0),
    date.utc(2011, 0, 1, 21, 0),
    date.utc(2011, 0, 2, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 6-hour ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 16, 28, 27), date.utc(2011, 0, 2, 14, 34, 12), 4), [
    date.utc(2011, 0, 1, 18, 0),
    date.utc(2011, 0, 2, 0, 0),
    date.utc(2011, 0, 2, 6, 0),
    date.utc(2011, 0, 2, 12, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 12-hour ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 16, 28, 27), date.utc(2011, 0, 3, 21, 34, 12), 4), [
    date.utc(2011, 0, 2, 0, 0),
    date.utc(2011, 0, 2, 12, 0),
    date.utc(2011, 0, 3, 0, 0),
    date.utc(2011, 0, 3, 12, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-day ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 16, 28, 27), date.utc(2011, 0, 5, 21, 34, 12), 4), [
    date.utc(2011, 0, 2, 0, 0),
    date.utc(2011, 0, 3, 0, 0),
    date.utc(2011, 0, 4, 0, 0),
    date.utc(2011, 0, 5, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 2-day ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 2, 16, 28, 27), date.utc(2011, 0, 9, 21, 34, 12), 4), [
    date.utc(2011, 0, 3, 0, 0),
    date.utc(2011, 0, 5, 0, 0),
    date.utc(2011, 0, 7, 0, 0),
    date.utc(2011, 0, 9, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-week ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 1, 16, 28, 27), date.utc(2011, 0, 23, 21, 34, 12), 4), [
    date.utc(2011, 0, 2, 0, 0),
    date.utc(2011, 0, 9, 0, 0),
    date.utc(2011, 0, 16, 0, 0),
    date.utc(2011, 0, 23, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-month ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2011, 0, 18), date.utc(2011, 4, 2), 4), [
    date.utc(2011, 1, 1, 0, 0),
    date.utc(2011, 2, 1, 0, 0),
    date.utc(2011, 3, 1, 0, 0),
    date.utc(2011, 4, 1, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 3-month ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2010, 11, 18), date.utc(2011, 10, 2), 4), [
    date.utc(2011, 0, 1, 0, 0),
    date.utc(2011, 3, 1, 0, 0),
    date.utc(2011, 6, 1, 0, 0),
    date.utc(2011, 9, 1, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate 1-year ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2010, 11, 18), date.utc(2014, 2, 2), 4), [
    date.utc(2011, 0, 1, 0, 0),
    date.utc(2012, 0, 1, 0, 0),
    date.utc(2013, 0, 1, 0, 0),
    date.utc(2014, 0, 1, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) can generate multi-year ticks", function(test) {
  test.deepEqual(time.utcTicks(date.utc(0, 11, 18), date.utc(2014, 2, 2), 6), [
    date.utc( 500, 0, 1, 0, 0),
    date.utc(1000, 0, 1, 0, 0),
    date.utc(1500, 0, 1, 0, 0),
    date.utc(2000, 0, 1, 0, 0)
  ]);
  test.end();
});

tape("utcTicks(start, stop, count) returns one tick for an empty domain", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2014, 2, 2), date.utc(2014, 2, 2), 6), [date.utc(2014, 2, 2)]);
  test.end();
});

tape("utcTicks(start, stop, count) returns descending ticks for a descending domain", function(test) {
  test.deepEqual(time.utcTicks(date.utc(2014, 2, 2), date.utc(2010, 11, 18), 4), [date.utc(2014, 0, 1, 0, 0), date.utc(2013, 0, 1, 0, 0), date.utc(2012, 0, 1, 0, 0), date.utc(2011, 0, 1, 0, 0)]);
  test.deepEqual(time.utcTicks(date.utc(2011, 10, 2), date.utc(2010, 11, 18), 4), [date.utc(2011, 9, 1, 0, 0), date.utc(2011, 6, 1, 0, 0), date.utc(2011, 3, 1, 0, 0), date.utc(2011, 0, 1, 0, 0)]);
  test.end();
});
