import interval from "./interval";

export default interval(function(date) {
  var date0 = date.getDate(), offset0 = date.getTimezoneOffset();
  date.setHours(0, 0, 0, 0);
  if (date.getDate() !== date0) date.setTime(date.getTime() + (date.getTimezoneOffset() - offset0) * 6e4);
}, function(date) {
  var date0 = date.getDate(), offset0 = date.getTimezoneOffset();
  date.setHours(24, 0, 0, 0);
  if (date.getDate() === date0) date.setTime(date.getTime() - (new Date(+date + 432e5).getTimezoneOffset() - offset0) * 6e4);
}, function(date, offset) {
  date.setDate(date.getDate() + offset);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 864e5;
});
