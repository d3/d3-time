import interval from "./interval";

export default interval(function(date) {
  date.setMilliseconds(0);
}, function(date, offset) {
  date.setTime(+date + offset * 1e3);
}, function(start, end) {
  return (end - start) / 1e3;
});
