import interval from "./interval";
import {durationMinute} from "./duration";

var minute = interval(function(date) {
  date.setSeconds(0, 0);
}, function(date, step) {
  date.setMinutes(date.getMinutes() + step);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

export default minute;
export var minutes = minute.range;
