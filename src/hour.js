import interval from "./interval";

export default interval(function(date) {
  var value0 = date.getHours(), offset0 = date.getTimezoneOffset();
  date.setMinutes(0, 0, 0, 0);
  if (date.getHours() !== value0) date.setTime(date - (offset0 - date.getTimezoneOffset()) * 6e4);
}, function(date) {
  date.setTime(date - 1);
  var value0 = date.getHours(), offset0 = date.getTimezoneOffset();
  date.setMinutes(60, 0, 0, 0);
  if (date.getHours() === value0) date.setTime(date - (new Date(+date + 432e5).getTimezoneOffset() - offset0) * 6e4);
}, function(date, offset) {
  var offset0 = date.getTimezoneOffset();
  date.setTime(+date + offset * 36e5);
  date.setTime(+date + (date.getTimezoneOffset() - offset0) % 60 * 6e4);
}, function(start, end) {
  return (end - start) / 36e5; // XXX wrong with non-hour DST offset
});
