import interval from "./interval";

export default interval(function(date) {
  date.setMilliseconds(0);
}, function(date) {
  date.setTime(date - 1);
  date.setMilliseconds(0);
  date.setTime(+date + 1e3);
}, function(date, offset) {
  date.setTime(+date + offset * 1e3);
}, function(start, end) {
  return (end - start) / 1e3;
});
