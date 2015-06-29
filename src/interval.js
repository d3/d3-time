export default function newInterval(floori, offseti, count) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.round = function(date) {
    var d0 = new Date(+date),
        d1 = new Date(date - 1);
    floori(d0), floori(d1), offseti(d1, 1);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), date;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [];
    start = new Date(start - 1);
    stop = new Date(+stop);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop)) return range; // also handles Invalid Date
    offseti(start, 1), floori(start);
    if (start < stop) range.push(new Date(+start));
    while (offseti(start, step), floori(start), start < stop) range.push(new Date(+start));
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      while (--step >= 0) while (offseti(date, 1), !test(date));
    });
  };

  if (count) interval.count = function(start, end) {
    start = new Date(+start);
    end = new Date(+end);
    floori(start), floori(end);
    return Math.floor(count(start, end));
  };

  return interval;
};
