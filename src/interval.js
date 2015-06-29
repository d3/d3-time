export default function newInterval(floori, ceili, offseti, count) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.round = function(date) {
    var d0 = new Date(+date),
        d1 = new Date(+date);
    floori(d0), ceili(d1);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.ceil = function(date) {
    return ceili(date = new Date(+date)), date;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [];
    start = new Date(+start);
    stop = new Date(+stop);
    step = step == null ? 1 : Math.floor(step);
    while (ceili(start), start < stop) {
      range.push(new Date(+start));
      for (var i = step; i > 1; --i) start.setTime(+start + 1), ceili(start);
      start.setTime(+start + 1);
    }
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
