import interval from "./interval";

export default interval(function(date) {
  date.setUTCMilliseconds(0);
}, function(date, offset) {
  date.setTime(+date + offset * 1e3);
});
