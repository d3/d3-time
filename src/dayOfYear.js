import year from "./year";

export default function(date) {
  var y = year.floor(date);
  return Math.floor((date - y - (date.getTimezoneOffset() - y.getTimezoneOffset()) * 6e4) / 864e5);
};
