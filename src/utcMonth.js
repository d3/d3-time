import interval from "./interval";

export default interval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(1);
}, function(date, offset) {
  date.setUTCMonth(date.getUTCMonth() + offset);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
});
