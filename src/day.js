import interval from "./interval";

export default interval(function(date) {
  var value0 = date.getDate(), offset0 = date.getTimezoneOffset();
  date.setHours(0, 0, 0, 0);
  if (date.getDate() < value0) date.setTime(date - (offset0 - date.getTimezoneOffset()) * 6e4);
}, function(date) {
  date.setTime(date - 1);
  var value0 = date.getDate(), offset0 = date.getTimezoneOffset();
  date.setHours(24, 0, 0, 0);
  if (date.getDate() === value0) date.setTime(date - (new Date(+date + 432e5).getTimezoneOffset() - offset0) * 6e4);
}, function(date, offset) {
  var offset0 = date.getTimezoneOffset();
  date.setTime(+date + offset * 864e5);
  date.setTime(+date + (date.getTimezoneOffset() - offset0) * 6e4);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 864e5;
});
