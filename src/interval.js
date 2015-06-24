export default function(floor, step) {
  return {
    floor: function(date) {
      return floor(date = new Date(+date)), date;
    },
    round: function(date) {
      var d0 = new Date(+date),
          d1 = new Date(date - 1);
      floor(d0), floor(d1), step(d1, 1);
      return date - d0 < d1 - date ? d0 : d1;
    },
    ceil: function(date) {
      return floor(date = new Date(date - 1)), step(date, 1), date;
    },
    offset: function(date, count) {
      return step(date = new Date(+date), count == null ? 1 : count), date;
    }
  };
};
