import interval from "./interval";

export default interval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date) {
  // XXX TODO
}, function(date, offset) {
  date.setFullYear(date.getFullYear() + offset); // XXX Probably okay?
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
});
