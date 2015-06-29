import interval from "./interval";

export default interval(function(date) {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  // XXX wrong
}, function(date) {
  // XXX wrong
}, function(date, offset) {
  date.setMonth(date.getMonth() + offset); // XXX wrong due to DST
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
});
