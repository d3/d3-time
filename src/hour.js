import interval from "./interval";
import {durationHour} from "./duration";

var hour = interval(function(date) {
  date.setMinutes(0, 0, 0);
}, function(date, step) {
  date.setHours(date.getHours() + step);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

export default hour;
export var hours = hour.range;
