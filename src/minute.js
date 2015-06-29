import interval from "./interval";

export default interval(function(date) {
  date.setSeconds(0, 0);
}, function(date) {
  date.setTime(date - 1);
  date.setSeconds(0, 0);
  date.setTime(+date + 6e4);
}, function(date, offset) {
  date.setTime(+date + offset * 6e4);
}, function(start, end) {
  return (end - start) / 6e4;
});
