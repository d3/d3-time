export default function(floor, step) {
  return {
    floor: function(date) {
      return floor(date = new Date(+date)), date;
    },
    ceil: function(date) {
      return floor(date = new Date(date - 1)), step(date, 1), date;
    }
  };
};
