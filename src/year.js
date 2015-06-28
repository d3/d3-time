import interval from "./interval";

export default interval(function(date) {
  date.setHours(0, 0, 0, 0);
  date.setMonth(0, 1);
}, function(date, offset) {
  date.setFullYear(date.getFullYear() + offset);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
});
