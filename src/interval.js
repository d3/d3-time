export default function(floor, offset) {
  return {
    floor: function(date) {
      return floor(date = new Date(+date)), date;
    },
    round: function(date) {
      var d0 = new Date(+date),
          d1 = new Date(date - 1);
      floor(d0), floor(d1), offset(d1, 1);
      return date - d0 < d1 - date ? d0 : d1;
    },
    ceil: function(date) {
      return floor(date = new Date(date - 1)), offset(date, 1), date;
    },
    offset: function(date, step) {
      return offset(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    },
    range: function(start, stop, step) {
      var range = [];
      start = new Date(start - 1);
      stop = new Date(+stop);
      step = step == null ? 1 : Math.floor(step);
      if (!(start < stop)) return range; // also handles Invalid Date
      floor(start);
      while (offset(start, step), start < stop) range.push(new Date(+start));
      return range;
    }
  };
};
