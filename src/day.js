import interval from "./interval";

export default interval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, offset) {
  date.setDate(date.getDate() + offset);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 864e5;
});
