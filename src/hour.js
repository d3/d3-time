import interval from "./interval";

export default interval(function(date) {
  date.setMinutes(0, 0, 0);
}, function(date, offset) {
  date.setTime(+date + offset * 36e5);
}, function(start, end) {
  return (end - start) / 36e5;
});
