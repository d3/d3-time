import interval from "./interval";

var utcYear = interval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCMonth(0, 1);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

export default utcYear;
export var utcYears = utcYear.range;
